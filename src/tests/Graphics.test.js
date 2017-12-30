import * as G from "graphics/Graphics";

describe("Test all Graphics classes", () => {
    describe("Color(25, 50, 75)", () => {
        let color;

        beforeEach(() => color = new G.Color(25, 50, 75));

        it("should return tuple (25, 50, 75, 255)", () =>
            expect(color.tupleValue).toEqual([25, 50, 75, 255]));

        it("should should equal another color", () =>
            expect(color.isEqual(new G.Color(25, 50, 75))).toBe(true));
    });

    describe("Point(50, 40)", () => {
        let point;

        beforeEach(() => point = new G.Point(50, 40));

        it("should return tuple (50, 40)", () =>
            expect(point.tupleValue).toEqual([50, 40]));

        it("should equal another point", () =>
            expect(point.isEqual(new G.Point(50, 40))).toBe(true));

        it("should have a distance of about 62.769 to (74, 98)", () =>
            expect(point.distanceTo(new G.Point(74, 98))).toBeCloseTo(62.769));
    });

    describe("Size(40, 80)", function () {
        let size;

        beforeEach(() => size = new G.Size(40, 80));
    });

    describe("Rectangle(20, 40, 70, 120)", () => {
        let rectangle;

        beforeEach(() =>
            rectangle = new G.Rectangle(new G.Point(20, 40), new G.Size(70, 120)));

        it("should be true that (50, 50) isWithinBounds", () =>
            expect(rectangle.isWithinBounds(new G.Point(50, 50))).toBe(true));
    });

    describe("Ellipse(40, 60, 50, 90)", () => {
        let ellipse;

        beforeEach(() =>
            ellipse = new G.Ellipse(new G.Point(40, 60), new G.Size(50, 90)));

        it("should be true that (38, 18) isWithinBounds", () =>
            expect(ellipse.isWithinBounds(new G.Point(38, 18))).toBe(true));
    });

    describe("Arc(70, 90, 30, 75, 0, 3π/4", () => {
        let arc;

        beforeEach(() =>
            arc = G.Arc.init(70, 90, 30, 75, 0, (3 * Math.PI) / 4));

        it("should be true that (67, 122) isWithinBounds", () => {
            expect(arc.isWithinBounds(new G.Point(67, 122))).toBe(true);
        });

        it("should be false that (60, 91) isWithinBounds", () => {
            expect(arc.isWithinBounds(new G.Point(60, 91))).toBe(false);
        });
    });
});