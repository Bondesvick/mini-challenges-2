function removeDuplicates(obj) {

    let theKeys = Object.keys(obj);
    let noDuplicate = []
    let returned = {}
    
    theKeys.reverse().forEach(element => {
      returned[element] = []
      obj[element].forEach((ler) => {

        if (!noDuplicate.includes(ler)){
          returned[element].push(ler);
          noDuplicate.push(ler)
        }

      });

    })

    return returned;
}

module.exports = removeDuplicates;
