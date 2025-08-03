import React, { useEffect, useState } from "react";
import gearOptions from "./gearOptions";
import spellDB from "./spellDB";
import Tooltip from "./Tooltip";

const slotTypes = {
  0: "helmet",
  1: "cape",
  2: "offhand",
  3: "armor",
  4: "right",
  5: "potion",
  6: "boots",
  7: "food",
  8: "mount",
};
const itemIndexList = [];
const itemIndexMap = {};

let index = 0;

for (const slot of Object.values(gearOptions)) {
  // Items
  if (slot.items) {
    for (const rawItem of slot.items) {
      const id = typeof rawItem === "string" ? rawItem : rawItem.id;
      itemIndexList.push(id);
      itemIndexMap[id] = index++;
    }
  }

  // Cat
  if (slot.categories) {
    for (const cat of slot.categories) {
      if (cat.items) {
        for (const rawItem of cat.items) {
          const id = typeof rawItem === "string" ? rawItem : rawItem.id;
          itemIndexList.push(id);
          itemIndexMap[id] = index++;
        }
      }

      // Subcat
      if (cat.subcategories) {
        for (const sub of cat.subcategories) {
          for (const rawItem of sub.items) {
            const id = typeof rawItem === "string" ? rawItem : rawItem.id;
            itemIndexList.push(id);
            itemIndexMap[id] = index++;
          }
        }
      }
    }
  }
}

const getItemIndexById = (id) => itemIndexMap[id] ?? -1;
const getItemIdByIndex = (index) => itemIndexList[index] ?? null;

const getItemIdFromUrl = (url) =>
  url?.split("/").pop().replace(".png", "") || "null";
const getImageUrlFromId = (id) =>
  !id || id === "null"
    ? null
    : `https://render.albiononline.com/v1/item/${id}.png`;

const getSpellSlotCount = (itemId) => {
  const data = spellDB[itemId];
  if (!data) return { active: 0, passive: 0 };

  const isOffhand = gearOptions.offhand.categories.some((cat) =>
    cat.subcategories?.some((subcat) =>
      subcat.items.some((item) => item.id === itemId)
    )
  );

  if (isOffhand) {
    return {
      active: 3,
      passive: 1,
    };
  }

  const activeSlots = ["active1", "active2"].filter((key) =>
    Array.isArray(data[key])
  ).length;
  const passiveSlots = ["passive1", "passive2", "passive3"].filter((key) =>
    Array.isArray(data[key])
  ).length;

  return {
    active: activeSlots,
    passive: passiveSlots,
  };
};

const getSpellsForItem = (item, type, index = 0) => {
  const data = spellDB[item.id];
  if (!data) return [];

  if (type === "activeSpell") {
    return data[`active${index + 1}`] || [];
  }
  if (type === "passiveSpell") {
    return data[`passive${index + 1}`] || [];
  }

  return [];
};

function MainContent() {
  const emptyBuild = () => ({
    slots: Array(9).fill(null),
    selectedItemDetails: [],
  });
  const [builds, setBuilds] = useState([emptyBuild()]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [spellDropdown, setSpellDropdown] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState("category");
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  //   load page read ?build from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const buildParam = params.get("build");

    if (buildParam) {
      const parsedBuilds = buildParam.split("|").map((buildStr) => {
        const newSlots = Array(9).fill(null);
        const newDetails = [];

        buildStr.split(",").forEach((entry) => {
          const [slot, itemIndexRaw, ...spellIndexes] = entry
            .split(":")
            .map((v) => (v === "null" ? null : Number(v)));

          if (itemIndexRaw === null || isNaN(slot)) return;

          const id = getItemIdByIndex(itemIndexRaw);
          const imageUrl = getImageUrlFromId(id);
          if (!id) return;

          const isTwoHanded = gearOptions.offhand.categories
            .flatMap(
              (cat) => cat.subcategories?.flatMap((sub) => sub.items) ?? []
            )
            .some((item) => item.id === id && item.twoHanded);

          if (
            slot === 4 &&
            newDetails.find((item) => item.slot === 2 && item.twoHanded)
          ) {
            return;
          }

          newSlots[slot] = imageUrl;

          const { active: activeCount, passive: passiveCount } =
            getSpellSlotCount(id);

          const activeIndexes = Array.from(
            { length: activeCount },
            (_, i) => spellIndexes[i] ?? null
          );
          const passiveIndexes = Array.from(
            { length: passiveCount },
            (_, i) => spellIndexes[activeCount + i] ?? null
          );

          const activeSpells = activeIndexes.map((idx, i) =>
            id && idx !== null && idx !== -1
              ? getSpellsForItem({ id }, "activeSpell", i)[idx]
              : null
          );

          const passiveSpells = passiveIndexes.map((idx, i) =>
            id && idx !== null && idx !== -1
              ? getSpellsForItem({ id }, "passiveSpell", i)[idx]
              : null
          );
          const itemData = getItemDataById(id);

          newDetails.push({
            id,
            name: itemData?.name,

            slot,
            activeSpells,
            passiveSpells,
            twoHanded: isTwoHanded,
          });
        });
        const slot2Item = newDetails.find(
          (item) => item.slot === 2 && item.twoHanded
        );
        if (slot2Item) {
          const imageUrl = getImageUrlFromId(slot2Item.id);
          newSlots[4] = imageUrl;

          newDetails.push({
            ...slot2Item,
            slot: 4,
          });
        }

        return { slots: newSlots, selectedItemDetails: newDetails };
      });

      setBuilds(parsedBuilds);
    }
  }, []);

  // change
  useEffect(() => {
    const buildParam = builds
      .map((build) =>
        build.selectedItemDetails
          .sort((a, b) => a.slot - b.slot)
          .map((item) => {
            const itemIndex = getItemIndexById(item.id);
            const parts = [item.slot, itemIndex];

            const { active: activeCount, passive: passiveCount } =
              getSpellSlotCount(item.id);

            // Active spells
            if (Array.isArray(item.activeSpells)) {
              item.activeSpells.forEach((spell, idx) => {
                const spellList = getSpellsForItem(item, "activeSpell", idx);
                const spellIndex = spell
                  ? spellList.findIndex((s) => s.name === spell.name)
                  : -1;
                if (spellIndex !== -1) parts.push(spellIndex);
              });
            }

            // Passive spells
            if (Array.isArray(item.passiveSpells)) {
              item.passiveSpells.forEach((spell, idx) => {
                const spellList = getSpellsForItem(item, "passiveSpell", idx);
                const spellIndex = spell
                  ? spellList.findIndex((s) => s.name === spell.name)
                  : -1;
                if (spellIndex !== -1) parts.push(spellIndex);
              });
            }

            return parts.join(":");
          })
          .join(",")
      )
      .join("|");

    window.history.replaceState(null, "", `?build=${buildParam}`);
  }, [builds]);

  const isSlotLocked = (buildIndex, slotIndex) => {
    const build = builds[buildIndex];
    if (slotIndex !== 4) return false;

    const offhandItem = build.selectedItemDetails.find(
      (item) => item.slot === 2
    );
    return offhandItem?.twoHanded === true;
  };

  const handleSlotClick = (buildIndex, slotIndex) => {
    if (isSlotLocked(buildIndex, slotIndex)) return;

    setSelectedSlot({ buildIndex, slotIndex });
    setIsModalOpen(true);
    setModalStep("category");
    setActiveCategory(null);
  };

  const getItemDataById = (id) => {
    for (const slot of Object.values(gearOptions)) {
      const sources = [
        slot.items || [],
        ...(slot.categories || []).flatMap((cat) => [
          cat.items || [],
          ...(cat.subcategories || []).flatMap((sub) => sub.items || []),
        ]),
      ].flat();

      for (const raw of sources) {
        const item = typeof raw === "string" ? { id: raw } : raw;
        if (item.id === id) return item;
      }
    }
    return null;
  };

  const handleImageSelect = (image, itemData = {}) => {
    const itemId = getItemIdFromUrl(image);
    const updated = [...builds];
    const build = updated[selectedSlot.buildIndex];
    const newSlots = [...build.slots];
    const newDetails = [...build.selectedItemDetails];
    const slot = selectedSlot.slotIndex;

    const { active: activeCount, passive: passiveCount } =
      getSpellSlotCount(itemId);
    const activeSpells = Array(activeCount).fill(null);
    if (slot === 2 && spellDB[itemId]?.active3?.length === 1) {
      activeSpells[2] = spellDB[itemId].active3[0];
    }
    const passiveSpells = Array(passiveCount).fill(null);
    const newItem = {
      ...itemData,
      id: itemId,
      slot,
      activeSpells,
      passiveSpells,
    };

    newSlots[slot] = image;

    const existingIndex = newDetails.findIndex((item) => item.slot === slot);
    if (existingIndex !== -1) {
      newDetails[existingIndex] = newItem;
    } else {
      newDetails.push(newItem);
    }

    if (slot === 2) {
      const mirrorSlot = 4;

      if (itemData.twoHanded) {
        newSlots[mirrorSlot] = image;
        const mirrorItem = {
          ...newItem,
          slot: mirrorSlot,
        };
        const mirrorIndex = newDetails.findIndex(
          (item) => item.slot === mirrorSlot
        );
        if (mirrorIndex !== -1) {
          newDetails[mirrorIndex] = mirrorItem;
        } else {
          newDetails.push(mirrorItem);
        }
      } else {
        newSlots[mirrorSlot] = null;
        const filtered = newDetails.filter((item) => item.slot !== mirrorSlot);
        newDetails.length = 0;
        newDetails.push(...filtered);
      }
    }

    updated[selectedSlot.buildIndex] = {
      slots: newSlots,
      selectedItemDetails: newDetails,
    };

    setBuilds(updated);
    setIsModalOpen(false);
    setSpellDropdown(null);
  };

  const handleSpellSelect = (
    buildIndex,
    slotIndex,
    type,
    spell,
    spellIndex = 0
  ) => {
    const updated = [...builds];
    updated[buildIndex].selectedItemDetails = updated[
      buildIndex
    ].selectedItemDetails.map((item) => {
      if (item.slot !== slotIndex) return item;

      if (type === "activeSpell") {
        const newActives = [...(item.activeSpells || [])];
        newActives[spellIndex] = spell;
        return { ...item, activeSpells: newActives };
      }

      if (type === "passiveSpell") {
        const newPassives = [...(item.passiveSpells || [])];
        newPassives[spellIndex] = spell;
        return { ...item, passiveSpells: newPassives };
      }

      return item;
    });

    setBuilds(updated);
    setSpellDropdown(null);
  };

  const handleRemoveImage = (buildIndex, slotIndex) => {
    const updated = [...builds];
    const build = updated[buildIndex];

    const itemToRemove = build.selectedItemDetails.find(
      (item) => item.slot === slotIndex
    );

    build.slots[slotIndex] = null;
    build.selectedItemDetails = build.selectedItemDetails.filter(
      (item) => item.slot !== slotIndex
    );

    if (slotIndex === 2 && itemToRemove?.twoHanded) {
      build.slots[4] = null;
      build.selectedItemDetails = build.selectedItemDetails.filter(
        (item) => item.slot !== 4
      );
    }

    updated[buildIndex] = build;
    setBuilds(updated);
  };

  const addNewBuild = () => setBuilds([...builds, emptyBuild()]);

  const handleReset = () => {
    setBuilds([emptyBuild()]);
    window.history.replaceState(null, "", "?build=");
  };

  const handleResetBuild = (buildIndex) => {
    const updated = [...builds];
    updated[buildIndex] = emptyBuild();
    setBuilds(updated);
  };

  const handleRemoveBuild = (buildIndex) => {
    const updated = builds.filter((_, i) => i !== buildIndex);
    setBuilds(updated);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    } catch (err) {
      alert("Failed to copy link");
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[#0e1515] text-white">
      <div className="flex flex-wrap justify-center gap-10">
        {builds.map((build, buildIndex) => (
          <div key={buildIndex} className="flex flex-col md:flex-row gap-6">
            {/* Slots */}
            <div className="bg-zinc-900 rounded-2xl shadow-lg p-6 border border-white/10">
              <div className="grid grid-cols-3 gap-1">
                <div></div>
                {build.slots.map((slot, slotIndex) => (
                  <div
                    key={slotIndex}
                    className={`relative w-[100px] h-[100px] flex items-center justify-center rounded-lg group
      ${slot ? "" : "border-2 border-sky-500"}
      ${
        isSlotLocked(buildIndex, slotIndex)
          ? "opacity-50 pointer-events-none"
          : ""
      }
      ${slotIndex === 8 ? "col-start-2" : ""} 
    `}
                  >
                    {slot ? (
                      <>
                        <Tooltip
                          content={
                            builds[buildIndex].selectedItemDetails.find(
                              (item) => item.slot === slotIndex
                            )?.name ??
                            getItemIdFromUrl(
                              builds[buildIndex].slots[slotIndex]
                            ) ??
                            "Item"
                          }
                        >
                          <img
                            src={slot}
                            alt="item"
                            className="w-full h-full object-contain cursor-pointer"
                            onClick={() =>
                              handleSlotClick(buildIndex, slotIndex)
                            }
                          />
                        </Tooltip>
                        <button
                          onClick={() =>
                            handleRemoveImage(buildIndex, slotIndex)
                          }
                          className="absolute top-1 right-1 text-white hidden group-hover:block"
                        >
                          ×
                        </button>
                      </>
                    ) : (
                      <div
                        onClick={() => handleSlotClick(buildIndex, slotIndex)}
                        className="group w-full h-full flex items-center justify-center cursor-pointer bg-transparent hover:bg-zinc-800 rounded-lg"
                      >
                        <span className="text-3xl text-cyan-500 font-bold transform transition-transform duration-150 group-hover:rotate-45">
                          +
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleResetBuild(buildIndex)}
                  className="mt-4 bg-[#4c190b] text-white px-3 py-1 rounded-lg text-sm"
                >
                  Reset
                </button>
                {builds.length > 1 && buildIndex > 0 && (
                  <button
                    onClick={() => handleRemoveBuild(buildIndex)}
                    className="mt-4 bg-[#454548] text-white px-3 py-1 rounded-lg text-sm"
                  >
                    Remove build
                  </button>
                )}
              </div>
            </div>

            {/* Spells */}
            {build.selectedItemDetails.length > 0 && (
              <div className="bg-zinc-900 rounded-2xl shadow-lg p-6 border border-white/10 max-w-[350px] max-h-[90vh]">
                {(() => {
                  const slotPriority = [4, 2, 0, 3, 6];

                  const withSpells = build.selectedItemDetails
                    .filter((item) => {
                      const offhandItem = build.selectedItemDetails.find(
                        (i) => i.slot === 2
                      );
                      if (item.slot === 4 && offhandItem?.twoHanded)
                        return false;

                      return (
                        getSpellsForItem(item, "activeSpell").length > 0 ||
                        getSpellsForItem(item, "passiveSpell").length > 0
                      );
                    })
                    .sort((a, b) => {
                      const aPriority = slotPriority.includes(a.slot)
                        ? slotPriority.indexOf(a.slot)
                        : slotPriority.length;
                      const bPriority = slotPriority.includes(b.slot)
                        ? slotPriority.indexOf(b.slot)
                        : slotPriority.length;

                      return aPriority - bPriority;
                    });

                  return (
                    <>
                      {/* Items with spells */}
                      {withSpells.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 mb-3">
                          <Tooltip content={item.name || item.id}>
                            <img
                              src={getImageUrlFromId(item.id)}
                              alt={item.name || item.id}
                              className="w-16 h-16"
                            />
                          </Tooltip>
                          {/* Active spell */}
                          <div className="relative flex gap-2 items-center justify-center ">
                            {/* Active Spells (multiple slots) */}
                            {item.activeSpells?.map((selected, idx) => (
                              <div key={`active-${idx}`} className="relative">
                                {selected ? (
                                  <Tooltip
                                    content={selected.name || selected.id}
                                  >
                                    <img
                                      src={selected.icon}
                                      alt={selected.name}
                                      className="w-[48px] h-[48px] min-w-[48px] min-h-[48px] flex items-center justify-center mt-2 "
                                      onClick={() =>
                                        setSpellDropdown({
                                          buildIndex,
                                          slot: item.slot,
                                          type: "activeSpell",
                                          index: idx,
                                        })
                                      }
                                    />
                                  </Tooltip>
                                ) : (
                                  <button
                                    onClick={() =>
                                      setSpellDropdown({
                                        buildIndex,
                                        slot: item.slot,
                                        type: "activeSpell",
                                        index: idx,
                                      })
                                    }
                                    className="w-[40px] h-[40px] min-w-[40px] min-h-[40px] border border-cyan-500 rounded-full text-cyan-400 hover:bg-zinc-800 flex items-center justify-center"
                                  >
                                    +
                                  </button>
                                )}

                                {spellDropdown &&
                                  spellDropdown.buildIndex === buildIndex &&
                                  spellDropdown.slot === item.slot &&
                                  spellDropdown.type === "activeSpell" &&
                                  spellDropdown.index === idx && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-1 z-50 bg-[#0e1515] rounded-lg shadow-xl min-w-[60px] p-1 border border-white/10">
                                      {getSpellsForItem(
                                        item,
                                        "activeSpell",
                                        idx
                                      ).map((spell, i) => (
                                        <Tooltip
                                          content={spell.name || spell.id}
                                        >
                                          <img
                                            key={i}
                                            src={spell.icon}
                                            alt={spell.name}
                                            className="w-[50px] h-[50px] cursor-pointer hover:scale-110"
                                            onClick={() =>
                                              handleSpellSelect(
                                                buildIndex,
                                                item.slot,
                                                "activeSpell",
                                                spell,
                                                idx
                                              )
                                            }
                                          />
                                        </Tooltip>
                                      ))}
                                    </div>
                                  )}
                              </div>
                            ))}
                          </div>

                          {/* Passive spell */}
                          {item.passiveSpells &&
                            item.passiveSpells.map((selected, idx) => (
                              <div key={idx} className="relative">
                                {selected ? (
                                  <Tooltip
                                    content={selected.name || selected.id}
                                  >
                                    <img
                                      src={selected.icon}
                                      alt={selected.name}
                                      className="w-[48px] h-[48px] min-w-[48px] min-h-[48px] flex items-center justify-center mt-2"
                                      onClick={() =>
                                        setSpellDropdown({
                                          buildIndex,
                                          slot: item.slot,
                                          type: "passiveSpell",
                                          index: idx,
                                        })
                                      }
                                    />
                                  </Tooltip>
                                ) : (
                                  <button
                                    onClick={() =>
                                      setSpellDropdown({
                                        buildIndex,
                                        slot: item.slot,
                                        type: "passiveSpell",
                                        index: idx,
                                      })
                                    }
                                    className="w-[40px] h-[40px] min-w-[40px] min-h-[40px] border border-cyan-500 rounded-full text-cyan-400 hover:bg-zinc-800 flex items-center justify-center"
                                  >
                                    +
                                  </button>
                                )}
                                {spellDropdown &&
                                  spellDropdown.buildIndex === buildIndex &&
                                  spellDropdown.slot === item.slot &&
                                  spellDropdown.type === "passiveSpell" &&
                                  spellDropdown.index === idx && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-1 z-50 bg-[#0e1515] rounded-lg shadow-xl min-w-[60px] p-1 border border-white/10">
                                      {getSpellsForItem(
                                        item,
                                        "passiveSpell",
                                        idx
                                      ).map((spell, i) => (
                                        <Tooltip content={item.name || item.id}>
                                          <img
                                            key={i}
                                            src={spell.icon}
                                            alt={spell.name}
                                            className="w-[50px] h-[50px] cursor-pointer hover:scale-110"
                                            onClick={() =>
                                              handleSpellSelect(
                                                buildIndex,
                                                item.slot,
                                                "passiveSpell",
                                                spell,
                                                idx
                                              )
                                            }
                                          />
                                        </Tooltip>
                                      ))}
                                    </div>
                                  )}
                              </div>
                            ))}
                        </div>
                      ))}
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-row gap-4 mt-6">
        <button
          onClick={addNewBuild}
          className="bg-[#1f6f52] text-white px-4 py-2 rounded-lg"
        >
          +
        </button>
        <button
          onClick={handleReset}
          className="bg-[#4c190b] text-white px-4 py-2 rounded-lg"
        >
          Reset
        </button>
        <button
          onClick={handleCopyLink}
          className="bg-[#454548] text-white px-4 py-2 rounded-lg"
        >
          Copy link
        </button>
      </div>

      {showToast && (
        <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-50">
          Copied
        </div>
      )}

      {isModalOpen && selectedSlot && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#0d0f0f] border border-white/10 p-4 rounded-lg shadow-xl max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {slotTypes[selectedSlot.slotIndex] &&
              gearOptions[slotTypes[selectedSlot.slotIndex]] && (
                <div className="flex flex-col items-center gap-6">
                  {(() => {
                    const slotData =
                      gearOptions[slotTypes[selectedSlot.slotIndex]];

                    if (
                      "categories" in slotData &&
                      slotData.categories[0]?.subcategories
                    ) {
                      return (
                        <>
                          <div className="grid grid-cols-3 gap-3">
                            {slotData.categories.map((category, i) => (
                              <Tooltip
                                content={category.name || category.id}
                                key={i}
                              >
                                <img
                                  src={getImageUrlFromId(category.image)}
                                  alt={category.name}
                                  onClick={() => {
                                    setActiveCategory(category);
                                    setActiveSubcategory(null);
                                  }}
                                  className={`cursor-pointer max-h-[100px] }`}
                                />
                              </Tooltip>
                            ))}
                          </div>

                          {activeCategory?.subcategories && (
                            <div className="grid grid-cols-5 gap-3">
                              {activeCategory.subcategories.map((subcat, i) => (
                                <Tooltip
                                  content={subcat.name || subcat.id}
                                  key={i}
                                >
                                  <img
                                    src={getImageUrlFromId(subcat.image)}
                                    alt={subcat.name}
                                    onClick={() => setActiveSubcategory(subcat)}
                                    className={`cursor-pointer max-h-[100px] `}
                                  />
                                </Tooltip>
                              ))}
                            </div>
                          )}

                          {activeSubcategory && (
                            <div className="grid grid-cols-6 gap-2">
                              {activeSubcategory.items.map((item) => (
                                <Tooltip
                                  content={item.name || item.id}
                                  key={item.id}
                                >
                                  <img
                                    src={getImageUrlFromId(item.id)}
                                    alt={item.name}
                                    onClick={() =>
                                      handleImageSelect(
                                        getImageUrlFromId(item.id),
                                        item
                                      )
                                    }
                                    className="cursor-pointer max-h-[100px]"
                                  />
                                </Tooltip>
                              ))}
                            </div>
                          )}
                        </>
                      );
                    }

                    if ("categories" in slotData) {
                      return (
                        <>
                          {/* Categories */}
                          <div className="grid grid-cols-3 gap-3">
                            {slotData.categories.map((category, i) => (
                              <Tooltip
                                content={category.name || category.id}
                                key={i}
                              >
                                <img
                                  src={getImageUrlFromId(category.image)}
                                  alt={category.name}
                                  onClick={() => {
                                    setActiveCategory(category);
                                  }}
                                  className={`cursor-pointer max-h-[100px]`}
                                />
                              </Tooltip>
                            ))}
                          </div>

                          {/* Items */}
                          {activeCategory?.items && (
                            <div className="grid grid-cols-6 gap-2">
                              {activeCategory.items.map((item) => (
                                <Tooltip
                                  content={item.name || item.id}
                                  key={item.id}
                                >
                                  <img
                                    src={getImageUrlFromId(item.id)}
                                    alt={item.name}
                                    onClick={() =>
                                      handleImageSelect(
                                        getImageUrlFromId(item.id),
                                        item
                                      )
                                    }
                                    className="cursor-pointer max-h-[100px]"
                                  />
                                </Tooltip>
                              ))}
                            </div>
                          )}
                        </>
                      );
                    }

                    if ("items" in slotData) {
                      return (
                        <div className="grid grid-cols-7 gap-2">
                          {slotData.items.map((rawItem) => {
                            const item =
                              typeof rawItem === "string"
                                ? { id: rawItem, name: rawItem }
                                : rawItem;

                            return (
                              <Tooltip
                                content={item.name || item.id}
                                key={item.id}
                              >
                                <img
                                  src={getImageUrlFromId(item.id)}
                                  alt={item.name}
                                  onClick={() =>
                                    handleImageSelect(
                                      getImageUrlFromId(item.id),
                                      item
                                    )
                                  }
                                  className="cursor-pointer max-h-[100px]"
                                />
                              </Tooltip>
                            );
                          })}
                        </div>
                      );
                    }
                    return null;
                  })()}
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContent;
