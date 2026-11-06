## Findings

The accessibility report identified several color contrast issues, affecting the navigation links (About, Projects, Contact) and the email link in the Contact section. Some text colors were too light against their backgrounds, making them difficult to read.

## Fixes

Changed the --mauve-bark variable from #6D5148 to #3D2925, creating a deeper brown with better contrast against the pink backgrounds.

Updated navigation hover and keyboard-focus text colors from white to var(--primary-text) to improve readability.

Corrected a missing closing bracket in the CSS media queries.