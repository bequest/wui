import { createMuiTheme } from '@material-ui/core/styles';

import addTypography from './typography-utils';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#2a3e82',
      light: '#637ac7',
      main: '#3C59BA',
    },
    secondary: {
      dark: '#1f8270',
      light: '#57c7b3',
      main: '#2DBAA1',
    },
  },
  zIndex: {
    above: 900,
  },
  props: {
    // We don't want a ripple effect on any of our
    //   controls.
    MuiButtonBase: {
      disableRipple: true,
    },

    // We have a specific type of TextField we prefer
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
      margin: 'normal',
    },
  },
  overrides: {
    // Hide the buttons for submitting
    //   the calendar, which we don't
    //   want.
    MuiPickersToolbar: {
      toolbar: {
        display: 'none',
      },
    },

    // Hide the calendar header and
    //   add some padding to make it
    //   look a bit nicer.
    MuiPickersModal: {
      dialog: {
        minHeight: 'auto',

        '& + div': {
          display: 'none',
        },
      },
      dialogRoot: {
        padding: 10,
        minHeight: 'auto',
      },
    },

    // Fix the background of the month
    //   switcher arrows so the next
    //   month isn't displayed behind
    //   them.
    MuiPickersCalendarHeader: {
      iconButton: {
        backgroundColor: '#fff',

        '&:hover': {
          backgroundColor: '#eee',
        },

        '& > *': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

// Add in breakpoint helpers by device type. It is easier
//   to figure out what is going on when using these names.
theme.breakpoints.phone = theme.breakpoints.down('xs');
theme.breakpoints.tablet = theme.breakpoints.down('sm');
theme.breakpoints.notPhone = theme.breakpoints.up('sm');
theme.breakpoints.desktop = theme.breakpoints.up('md');

// This must be done after the breakpoint helpers are
//   set because they are used in the method.
theme.typography = addTypography(theme);

export default theme;