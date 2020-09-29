/**
 * A dynamic theme with mountain scenery that changes according to the time of day.
 *
 * @file   Controls the theme and animation.
 * @author Jennifer Lu
 * @since  1.0.1
 * @see    {@link https://github.com/jennifer-lu/Dynamic-Mountains-Theme}
 */

/**
 * The themes: dawn, morning, noon, afternoon, evening, sunset, dusk, night.
 * @const {theme}
 */
const themes =
{
  "dawn":
  {
    images:
    {
      additional_backgrounds: ["dawn.png"]
    },
    properties:
    {
      additional_backgrounds_alignment: ["center center"],
      additional_backgrounds_tiling: ["no-repeat"]
    },
    colors:
    {
      bookmark_text: "rgba(255, 255, 255, 1)",

      button_background_active: "rgba(255, 255, 255, 0.2)",
      button_background_hover: "rgba(255, 255, 255, 0.1)",

      icons: "rgba(255, 255, 255, 0.6)",
      icons_attention: "rgba(255, 255, 255, 1)",

      frame: "rgb(31, 64, 101)",
      frame_inactive: "rgb(31, 64, 101)",

      ntp_background: "rgb(31, 64, 101)",
      ntp_text: "rgba(255, 255, 255, 0.8)",

      popup: "rgba(31, 64, 101, 0.8)",
      popup_border: "rgba(255, 255, 255, 0)",
      popup_highlight: "rgba(255, 255, 255, 0.2)",
      popup_highlight_text: "rgba(255, 255, 255, 1)",
      popup_text: "rgba(255, 255, 255, 1)",

      sidebar: "rgba(31, 64, 101, 0.8)",
      sidebar_border: "rgba(255, 255, 255, 0)",
      sidebar_highlight: "rgba(255, 255, 255, 0.2)",
      sidebar_highlight_text: "rgba(255, 255, 255, 1)",
      sidebar_text: "rgba(255, 255, 255, 1)",

      tab_background_separator: "rgba(255, 255, 255, 0)",
      tab_background_text: "rgba(255, 255, 255, 0.8)",
      tab_line: "rgba(255, 255, 255, 0.8)",
      tab_loading: "rgba(255, 255, 255, 0.8)",
      tab_selected: "rgba(255, 255, 255, 0)",
      tab_text: "rgba(255, 255, 255, 1)",

      toolbar: "rgba(255, 255, 255, 0)",
      toolbar_bottom_separator: "rgba(255, 255, 255, 0)",
      toolbar_field: "rgba(255, 255, 255, 0)",
      toolbar_field_border: "rgba(255, 255, 255, 0)",
      toolbar_field_border_focus: "rgba(255, 255, 255, 0)",
      toolbar_field_focus: "rgba(31, 64, 101, 0.7)",
      toolbar_field_highlight: "rgba(255, 255, 255, 0.2)",
      toolbar_field_highlight_text: "rgba(255, 255, 255, 1)",
      toolbar_field_separator: "rgba(255, 255, 255, 0)",
      toolbar_field_text: "rgba(255, 255, 255, 1)",
      toolbar_field_text_focus: "rgba(255, 255, 255, 1)",
      toolbar_text: "rgba(255, 255, 255, 1)",
      toolbar_top_separator: "rgba(255, 255, 255, 0)",
      toolbar_vertical_separator: "rgba(255, 255, 255, 0)"
    }
  },

  "morning":
  {
    images:
    {
      additional_backgrounds: ["morning.png"]
    },
    properties:
    {
      additional_backgrounds_alignment: ["center center"],
      additional_backgrounds_tiling: ["no-repeat"]
    },
    colors:
    {
      bookmark_text: "rgba(0, 0, 0, 1)",

      button_background_active: "rgba(0, 0, 0, 0.2)",
      button_background_hover: "rgba(0, 0, 0, 0.1)",

      icons: "rgba(0, 0, 0, 0.6)",
      icons_attention: "rgba(0, 0, 0, 1)",

      frame: "rgb(49, 144, 213)",
      frame_inactive: "rgb(49, 144, 213)",

      ntp_background: "rgb(49, 144, 213)",
      ntp_text: "rgba(0, 0, 0, 0.8)",

      popup: "rgba(49, 144, 213, 0.8)",
      popup_border: "rgba(0, 0, 0, 0)",
      popup_highlight: "rgba(0, 0, 0, 0.2)",
      popup_highlight_text: "rgba(0, 0, 0, 1)",
      popup_text: "rgba(0, 0, 0, 1)",

      sidebar: "rgba(49, 144, 213, 0.8)",
      sidebar_border: "rgba(0, 0, 0, 0)",
      sidebar_highlight: "rgba(0, 0, 0, 0.2)",
      sidebar_highlight_text: "rgba(0, 0, 0, 1)",
      sidebar_text: "rgba(0, 0, 0, 1)",

      tab_background_separator: "rgba(0, 0, 0, 0)",
      tab_background_text: "rgba(0, 0, 0, 0.8)",
      tab_line: "rgba(0, 0, 0, 0.8)",
      tab_loading: "rgba(0, 0, 0, 0.8)",
      tab_selected: "rgba(0, 0, 0, 0)",
      tab_text: "rgba(0, 0, 0, 1)",

      toolbar: "rgba(0, 0, 0, 0)",
      toolbar_bottom_separator: "rgba(0, 0, 0, 0)",
      toolbar_field: "rgba(0, 0, 0, 0)",
      toolbar_field_border: "rgba(0, 0, 0, 0)",
      toolbar_field_border_focus: "rgba(0, 0, 0, 0)",
      toolbar_field_focus: "rgba(49, 144, 213, 0.7)",
      toolbar_field_highlight: "rgba(0, 0, 0, 0.2)",
      toolbar_field_highlight_text: "rgba(0, 0, 0, 1)",
      toolbar_field_separator: "rgba(0, 0, 0, 0)",
      toolbar_field_text: "rgba(0, 0, 0, 1)",
      toolbar_field_text_focus: "rgba(0, 0, 0, 1)",
      toolbar_text: "rgba(0, 0, 0, 1)",
      toolbar_top_separator: "rgba(0, 0, 0, 0)",
      toolbar_vertical_separator: "rgba(0, 0, 0, 0)"
    }
  },

  "noon": {
    images:
    {
      additional_backgrounds: ["noon.png"]
    },
    properties:
    {
      additional_backgrounds_alignment: ["center center"],
      additional_backgrounds_tiling: ["no-repeat"]
    },
    colors:
    {
      bookmark_text: "rgba(0, 0, 0, 1)",

      button_background_active: "rgba(0, 0, 0, 0.2)",
      button_background_hover: "rgba(0, 0, 0, 0.1)",

      icons: "rgba(0, 0, 0, 0.6)",
      icons_attention: "rgba(0, 0, 0, 1)",

      frame: "rgb(69, 157, 223)",
      frame_inactive: "rgb(69, 157, 223)",

      ntp_background: "rgb(69, 157, 223)",
      ntp_text: "rgba(0, 0, 0, 0.8)",

      popup: "rgba(69, 157, 223, 0.8)",
      popup_border: "rgba(0, 0, 0, 0)",
      popup_highlight: "rgba(0, 0, 0, 0.2)",
      popup_highlight_text: "rgba(0, 0, 0, 1)",
      popup_text: "rgba(0, 0, 0, 1)",

      sidebar: "rgba(69, 157, 223, 0.8)",
      sidebar_border: "rgba(0, 0, 0, 0)",
      sidebar_highlight: "rgba(0, 0, 0, 0.2)",
      sidebar_highlight_text: "rgba(0, 0, 0, 1)",
      sidebar_text: "rgba(0, 0, 0, 1)",

      tab_background_separator: "rgba(0, 0, 0, 0)",
      tab_background_text: "rgba(0, 0, 0, 0.8)",
      tab_line: "rgba(0, 0, 0, 0.8)",
      tab_loading: "rgba(0, 0, 0, 0.8)",
      tab_selected: "rgba(0, 0, 0, 0)",
      tab_text: "rgba(0, 0, 0, 1)",

      toolbar: "rgba(0, 0, 0, 0)",
      toolbar_bottom_separator: "rgba(0, 0, 0, 0)",
      toolbar_field: "rgba(0, 0, 0, 0)",
      toolbar_field_border: "rgba(0, 0, 0, 0)",
      toolbar_field_border_focus: "rgba(0, 0, 0, 0)",
      toolbar_field_focus: "rgba(69, 157, 223, 0.7)",
      toolbar_field_highlight: "rgba(0, 0, 0, 0.2)",
      toolbar_field_highlight_text: "rgba(0, 0, 0, 1)",
      toolbar_field_separator: "rgba(0, 0, 0, 0)",
      toolbar_field_text: "rgba(0, 0, 0, 1)",
      toolbar_field_text_focus: "rgba(0, 0, 0, 1)",
      toolbar_text: "rgba(0, 0, 0, 1)",
      toolbar_top_separator: "rgba(0, 0, 0, 0)",
      toolbar_vertical_separator: "rgba(0, 0, 0, 0)"
    }
  },

  "afternoon":
  {
    images:
    {
      additional_backgrounds: ["afternoon.png"]
    },
    properties:
    {
      additional_backgrounds_alignment: ["center center"],
      additional_backgrounds_tiling: ["no-repeat"]
    },
    colors:
    {
      bookmark_text: "rgba(255, 255, 255, 1)",

      button_background_active: "rgba(255, 255, 255, 0.2)",
      button_background_hover: "rgba(255, 255, 255, 0.1)",

      icons: "rgba(255, 255, 255, 0.6)",
      icons_attention: "rgba(255, 255, 255, 1)",

      frame: "rgb(77, 134, 210)",
      frame_inactive: "rgb(77, 134, 210)",

      ntp_background: "rgb(77, 134, 210)",
      ntp_text: "rgba(255, 255, 255, 0.8)",

      popup: "rgba(77, 134, 210, 0.8)",
      popup_border: "rgba(255, 255, 255, 0)",
      popup_highlight: "rgba(255, 255, 255, 0.2)",
      popup_highlight_text: "rgba(255, 255, 255, 1)",
      popup_text: "rgba(255, 255, 255, 1)",

      sidebar: "rgba(77, 134, 210, 0.8)",
      sidebar_border: "rgba(255, 255, 255, 0)",
      sidebar_highlight: "rgba(255, 255, 255, 0.2)",
      sidebar_highlight_text: "rgba(255, 255, 255, 1)",
      sidebar_text: "rgba(255, 255, 255, 1)",

      tab_background_separator: "rgba(255, 255, 255, 0)",
      tab_background_text: "rgba(255, 255, 255, 0.8)",
      tab_line: "rgba(255, 255, 255, 0.8)",
      tab_loading: "rgba(255, 255, 255, 0.8)",
      tab_selected: "rgba(255, 255, 255, 0)",
      tab_text: "rgba(255, 255, 255, 1)",

      toolbar: "rgba(255, 255, 255, 0)",
      toolbar_bottom_separator: "rgba(255, 255, 255, 0)",
      toolbar_field: "rgba(255, 255, 255, 0)",
      toolbar_field_border: "rgba(255, 255, 255, 0)",
      toolbar_field_border_focus: "rgba(255, 255, 255, 0)",
      toolbar_field_focus: "rgba(77, 134, 210, 0.7)",
      toolbar_field_highlight: "rgba(255, 255, 255, 0.2)",
      toolbar_field_highlight_text: "rgba(255, 255, 255, 1)",
      toolbar_field_separator: "rgba(255, 255, 255, 0)",
      toolbar_field_text: "rgba(255, 255, 255, 1)",
      toolbar_field_text_focus: "rgba(255, 255, 255, 1)",
      toolbar_text: "rgba(255, 255, 255, 1)",
      toolbar_top_separator: "rgba(255, 255, 255, 0)",
      toolbar_vertical_separator: "rgba(255, 255, 255, 0)"
    }
  },

  "evening":
  {
    images:
    {
      additional_backgrounds: ["evening.png"]
    },
    properties:
    {
      additional_backgrounds_alignment: ["center center"],
      additional_backgrounds_tiling: ["no-repeat"]
    },
    colors:
    {
      bookmark_text: "rgba(255, 255, 255, 1)",

      button_background_active: "rgba(255, 255, 255, 0.2)",
      button_background_hover: "rgba(255, 255, 255, 0.1)",

      icons: "rgba(255, 255, 255, 0.6)",
      icons_attention: "rgba(255, 255, 255, 1)",

      frame: "rgb(79, 93, 158)",
      frame_inactive: "rgb(79, 93, 158)",

      ntp_background: "rgb(79, 93, 158)",
      ntp_text: "rgba(255, 255, 255, 0.8)",

      popup: "rgba(79, 93, 158, 0.8)",
      popup_border: "rgba(255, 255, 255, 0)",
      popup_highlight: "rgba(255, 255, 255, 0.2)",
      popup_highlight_text: "rgba(255, 255, 255, 1)",
      popup_text: "rgba(255, 255, 255, 1)",

      sidebar: "rgba(79, 93, 158, 0.8)",
      sidebar_border: "rgba(255, 255, 255, 0)",
      sidebar_highlight: "rgba(255, 255, 255, 0.2)",
      sidebar_highlight_text: "rgba(255, 255, 255, 1)",
      sidebar_text: "rgba(255, 255, 255, 1)",

      tab_background_separator: "rgba(255, 255, 255, 0)",
      tab_background_text: "rgba(255, 255, 255, 0.8)",
      tab_line: "rgba(255, 255, 255, 0.8)",
      tab_loading: "rgba(255, 255, 255, 0.8)",
      tab_selected: "rgba(255, 255, 255, 0)",
      tab_text: "rgba(255, 255, 255, 1)",

      toolbar: "rgba(255, 255, 255, 0)",
      toolbar_bottom_separator: "rgba(255, 255, 255, 0)",
      toolbar_field: "rgba(255, 255, 255, 0)",
      toolbar_field_border: "rgba(255, 255, 255, 0)",
      toolbar_field_border_focus: "rgba(255, 255, 255, 0)",
      toolbar_field_focus: "rgba(79, 93, 158, 0.7)",
      toolbar_field_highlight: "rgba(255, 255, 255, 0.2)",
      toolbar_field_highlight_text: "rgba(255, 255, 255, 1)",
      toolbar_field_separator: "rgba(255, 255, 255, 0)",
      toolbar_field_text: "rgba(255, 255, 255, 1)",
      toolbar_field_text_focus: "rgba(255, 255, 255, 1)",
      toolbar_text: "rgba(255, 255, 255, 1)",
      toolbar_top_separator: "rgba(255, 255, 255, 0)",
      toolbar_vertical_separator: "rgba(255, 255, 255, 0)"
    }
  },

  "sunset":
  {
    images:
    {
      additional_backgrounds: ["sunset.png"]
    },
    properties:
    {
      additional_backgrounds_alignment: ["center center"],
      additional_backgrounds_tiling: ["no-repeat"]
    },
    colors:
    {
      bookmark_text: "rgba(255, 255, 255, 1)",

      button_background_active: "rgba(255, 255, 255, 0.2)",
      button_background_hover: "rgba(255, 255, 255, 0.1)",

      icons: "rgba(255, 255, 255, 0.6)",
      icons_attention: "rgba(255, 255, 255, 1)",

      frame: "rgb(39, 40, 68)",
      frame_inactive: "rgb(39, 40, 68)",

      ntp_background: "rgb(39, 40, 68)",
      ntp_text: "rgba(255, 255, 255, 0.8)",

      popup: "rgba(39, 40, 68, 0.8)",
      popup_border: "rgba(255, 255, 255, 0)",
      popup_highlight: "rgba(255, 255, 255, 0.2)",
      popup_highlight_text: "rgba(255, 255, 255, 1)",
      popup_text: "rgba(255, 255, 255, 1)",

      sidebar: "rgba(39, 40, 68, 0.8)",
      sidebar_border: "rgba(255, 255, 255, 0)",
      sidebar_highlight: "rgba(255, 255, 255, 0.2)",
      sidebar_highlight_text: "rgba(255, 255, 255, 1)",
      sidebar_text: "rgba(255, 255, 255, 1)",

      tab_background_separator: "rgba(255, 255, 255, 0)",
      tab_background_text: "rgba(255, 255, 255, 0.8)",
      tab_line: "rgba(255, 255, 255, 0.8)",
      tab_loading: "rgba(255, 255, 255, 0.8)",
      tab_selected: "rgba(255, 255, 255, 0)",
      tab_text: "rgba(255, 255, 255, 1)",

      toolbar: "rgba(255, 255, 255, 0)",
      toolbar_bottom_separator: "rgba(255, 255, 255, 0)",
      toolbar_field: "rgba(255, 255, 255, 0)",
      toolbar_field_border: "rgba(255, 255, 255, 0)",
      toolbar_field_border_focus: "rgba(255, 255, 255, 0)",
      toolbar_field_focus: "rgba(39, 40, 68, 0.7)",
      toolbar_field_highlight: "rgba(255, 255, 255, 0.2)",
      toolbar_field_highlight_text: "rgba(255, 255, 255, 1)",
      toolbar_field_separator: "rgba(255, 255, 255, 0)",
      toolbar_field_text: "rgba(255, 255, 255, 1)",
      toolbar_field_text_focus: "rgba(255, 255, 255, 1)",
      toolbar_text: "rgba(255, 255, 255, 1)",
      toolbar_top_separator: "rgba(255, 255, 255, 0)",
      toolbar_vertical_separator: "rgba(255, 255, 255, 0)"
    }
  },

  "dusk":
  {
    images:
    {
      additional_backgrounds: ["dusk.png"]
    },
    properties:
    {
      additional_backgrounds_alignment: ["center center"],
      additional_backgrounds_tiling: ["no-repeat"]
    },
    colors:
    {
      bookmark_text: "rgba(255, 255, 255, 1)",

      button_background_active: "rgba(255, 255, 255, 0.2)",
      button_background_hover: "rgba(255, 255, 255, 0.1)",

      icons: "rgba(255, 255, 255, 0.6)",
      icons_attention: "rgba(255, 255, 255, 1)",

      frame: "rgb(19, 18, 36)",
      frame_inactive: "rgb(19, 18, 36)",

      ntp_background: "rgb(19, 18, 36)",
      ntp_text: "rgba(255, 255, 255, 0.8)",

      popup: "rgba(19, 18, 36, 0.8)",
      popup_border: "rgba(255, 255, 255, 0)",
      popup_highlight: "rgba(255, 255, 255, 0.2)",
      popup_highlight_text: "rgba(255, 255, 255, 1)",
      popup_text: "rgba(255, 255, 255, 1)",

      sidebar: "rgba(19, 18, 36, 0.8)",
      sidebar_border: "rgba(255, 255, 255, 0)",
      sidebar_highlight: "rgba(255, 255, 255, 0.2)",
      sidebar_highlight_text: "rgba(255, 255, 255, 1)",
      sidebar_text: "rgba(255, 255, 255, 1)",

      tab_background_separator: "rgba(255, 255, 255, 0)",
      tab_background_text: "rgba(255, 255, 255, 0.8)",
      tab_line: "rgba(255, 255, 255, 0.8)",
      tab_loading: "rgba(255, 255, 255, 0.8)",
      tab_selected: "rgba(255, 255, 255, 0)",
      tab_text: "rgba(255, 255, 255, 1)",

      toolbar: "rgba(255, 255, 255, 0)",
      toolbar_bottom_separator: "rgba(255, 255, 255, 0)",
      toolbar_field: "rgba(255, 255, 255, 0)",
      toolbar_field_border: "rgba(255, 255, 255, 0)",
      toolbar_field_border_focus: "rgba(255, 255, 255, 0)",
      toolbar_field_focus: "rgba(19, 18, 36, 0.7)",
      toolbar_field_highlight: "rgba(255, 255, 255, 0.2)",
      toolbar_field_highlight_text: "rgba(255, 255, 255, 1)",
      toolbar_field_separator: "rgba(255, 255, 255, 0)",
      toolbar_field_text: "rgba(255, 255, 255, 1)",
      toolbar_field_text_focus: "rgba(255, 255, 255, 1)",
      toolbar_text: "rgba(255, 255, 255, 1)",
      toolbar_top_separator: "rgba(255, 255, 255, 0)",
      toolbar_vertical_separator: "rgba(255, 255, 255, 0)"
    }
  },

  "night":
  {
    images:
    {
      additional_backgrounds: ["night.png"]
    },
    properties:
    {
      additional_backgrounds_alignment: ["center center"],
      additional_backgrounds_tiling: ["no-repeat"]
    },
    colors:
    {
      bookmark_text: "rgba(255, 255, 255, 1)",

      button_background_active: "rgba(255, 255, 255, 0.2)",
      button_background_hover: "rgba(255, 255, 255, 0.1)",

      icons: "rgba(255, 255, 255, 0.6)",
      icons_attention: "rgba(255, 255, 255, 1)",

      frame: "rgb(16, 14, 26)",
      frame_inactive: "rgb(16, 14, 26)",

      ntp_background: "rgb(16, 14, 26)",
      ntp_text: "rgba(255, 255, 255, 0.8)",

      popup: "rgba(16, 14, 26, 0.8)",
      popup_border: "rgba(255, 255, 255, 0)",
      popup_highlight: "rgba(255, 255, 255, 0.2)",
      popup_highlight_text: "rgba(255, 255, 255, 1)",
      popup_text: "rgba(255, 255, 255, 1)",

      sidebar: "rgba(16, 14, 26, 0.8)",
      sidebar_border: "rgba(255, 255, 255, 0)",
      sidebar_highlight: "rgba(255, 255, 255, 0.2)",
      sidebar_highlight_text: "rgba(255, 255, 255, 1)",
      sidebar_text: "rgba(255, 255, 255, 1)",

      tab_background_separator: "rgba(255, 255, 255, 0)",
      tab_background_text: "rgba(255, 255, 255, 0.8)",
      tab_line: "rgba(255, 255, 255, 0.8)",
      tab_loading: "rgba(255, 255, 255, 0.8)",
      tab_selected: "rgba(255, 255, 255, 0)",
      tab_text: "rgba(255, 255, 255, 1)",

      toolbar: "rgba(255, 255, 255, 0)",
      toolbar_bottom_separator: "rgba(255, 255, 255, 0)",
      toolbar_field: "rgba(255, 255, 255, 0)",
      toolbar_field_border: "rgba(255, 255, 255, 0)",
      toolbar_field_border_focus: "rgba(255, 255, 255, 0)",
      toolbar_field_focus: "rgba(16, 14, 26, 0.7)",
      toolbar_field_highlight: "rgba(255, 255, 255, 0.2)",
      toolbar_field_highlight_text: "rgba(255, 255, 255, 1)",
      toolbar_field_separator: "rgba(255, 255, 255, 0)",
      toolbar_field_text: "rgba(255, 255, 255, 1)",
      toolbar_field_text_focus: "rgba(255, 255, 255, 1)",
      toolbar_text: "rgba(255, 255, 255, 1)",
      toolbar_top_separator: "rgba(255, 255, 255, 0)",
      toolbar_vertical_separator: "rgba(255, 255, 255, 0)"
    }
  }
};

/**
 * The active theme.
 * @type {string}
 */
var activeTheme = "";

// Add theme on startup
updateTheme();

// Update theme every 5 mins
var interval = setInterval(updateTheme, 60000);

/**
 * Updates the browser window
 * @param {theme} theme The theme
 */
function setActiveTheme(theme)
{
  if (activeTheme !== theme)
  {
    activeTheme = theme;
    browser.theme.update(themes[activeTheme]);
  }
}

/**
 * Updates the active theme according to the time
 */
function updateTheme()
{
  let day = new Date();
  let hour = day.getHours();

  if (hour >= 5 && hour < 8)
    setActiveTheme("dawn");
  else if (hour >= 8 && hour < 11)
    setActiveTheme("morning");
  else if (hour >= 11 && hour < 15)
    setActiveTheme("noon");
  else if (hour >= 15 && hour < 17)
    setActiveTheme("afternoon");
  else if (hour >= 17 && hour < 18)
    setActiveTheme("evening");
  else if (hour >= 18 && hour < 19)
    setActiveTheme("sunset");
  else if (hour >= 19 && hour < 21)
    setActiveTheme("dusk");
  else
    setActiveTheme("night");
}
