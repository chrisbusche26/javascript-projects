// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  it('key should return value', function () {
    expect(launchcode.organization).toBe('nonprofit');
    expect(launchcode.executiveDirector).toBe('Jeff');
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  it('array should contain three elements', function () {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
  });

  it('when passed a number should return the proper value', function () { 
    expect(launchcode.launchOutput(2)).toBe('Launch!');
    expect(launchcode.launchOutput(3)).toBe('Code!');
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
    expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work.");
  })
});