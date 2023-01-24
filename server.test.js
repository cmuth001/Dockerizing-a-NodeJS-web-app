//const app = require("./server");
const getAboutUsLink = require("./server");
test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});
