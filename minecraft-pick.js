function stonePick(arr) {
    let sticks = 0;
    let cobblestones = 0;
  
    // Loop through the array to count materials
    arr.forEach(item => {
      if (item === "Sticks") sticks++;
      else if (item === "Cobblestone") cobblestones++;
      else if (item === "Wood") sticks += 4; // Convert wood into sticks
    });
  
    // Calculate the maximum number of stone pickaxes that can be crafted
    // Requires 2 sticks and 3 cobblestones per pickaxe
    const maxPickaxesFromSticks = Math.floor(sticks / 2);
    const maxPickaxesFromCobblestones = Math.floor(cobblestones / 3);
  
    // The number of pickaxes that can be crafted is limited by the ingredient that runs out first
    return Math.min(maxPickaxesFromSticks, maxPickaxesFromCobblestones);
  }
  
  // Test cases
  console.log(stonePick(["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"])); // 1
  console.log(stonePick(["Wood", "Cobblestone", "Cobblestone", "Cobblestone"])); // 1
  console.log(stonePick([])); // 0
  console.log(stonePick(["Sticks", "Wool", "Cobblestone"])); // 0
  console.log(stonePick(["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"])); // 2