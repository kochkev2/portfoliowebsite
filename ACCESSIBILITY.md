## Findings

The accessibility report identified several color contrast issues, affecting the navigation links (About, Projects, Contact) and the email link in the Contact section. Some text colors were too light against their backgrounds, making them difficult to read.

## Fixes

Espresso Brown (#241613): Changed the original Mauve Bark (#6D5148) to a much darker brown to improve text contrast.

Soft Rose Pink (#D99A96): Lightened the original Dusty Rose (#CB8380) to create even better contrast with dark text.

Updated navigation hover and keyboard-focus text colors from white to var(--primary-text) to improve readability.

Corrected a missing closing bracket in the CSS media queries.