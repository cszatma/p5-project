// @flow

import Enum from "../components/Enum";
import Size from "../graphics/Size";

// Constants
const w = window;
const canvasSize = Object.freeze(new Size(500, 500));

// Enums
const Direction = Enum.create(["up", "down", "left", "right"]);

export { w, canvasSize, Direction };