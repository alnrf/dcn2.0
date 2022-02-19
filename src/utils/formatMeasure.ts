export const getMeasure = (measureString: string | undefined) => {
  switch (measureString) {
    case "MILILITER":
      return "Mililitro";
    case "LITER":
      return "Litro";
    case "KILO":
      return "Quilo";
    case "KILOGRAM":
      return "Quilograma";
    case "METER":
      return "Metro";
    case "CENTIMETER":
      return "Centímetro";
    case "KILOMETER":
      return "Quilômetro";
    default:
      return "Unidade";
  }
};

export const getMeasureAbbreviation = (measureString: string | undefined) => {
  switch (measureString) {
    case "MILILITER":
      return "ml";
    case "LITER":
      return "l";
    case "KILO":
    case "KILOGRAM":
      return "kg";
    case "METER":
      return "m";
    case "CENTIMETER":
      return "cm";
    case "KILOMETER":
      return "km";
      default:
        return "un";
  }
};
