const Gradient = () => (
  <defs>
    <linearGradient id="gradient" x1="80.86%" x2="19.14%" y1="0%" y2="100%">
      <stop offset="0%" stopColor="#525AC9" />
      <stop offset="100%" stopColor="#DE6161" />
    </linearGradient>
  </defs>
);

const Svg = ({ children, style = {} }) => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    style={{
      fill: 'url("#gradient")',
      ...style,
    }}
  >
    {children}
  </svg>
);

const HeartIcon = () => (
  <Svg>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    <Gradient />
  </Svg>
);

const HeartBrokenIcon = () => (
  <svg
    enableBackground="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    style={{
      fill: "rgba(0, 0, 0, 0.54)",
    }}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M16.5,3c-0.96,0-1.9,0.25-2.73,0.69L12,9h3l-3,10l1-9h-3l1.54-5.39C10.47,3.61,9.01,3,7.5,3C4.42,3,2,5.42,2,8.5 c0,4.13,4.16,7.18,10,12.5c5.47-4.94,10-8.26,10-12.5C22,5.42,19.58,3,16.5,3z" />
    </g>
  </svg>
);

const ShareIcon = () => (
  <Svg>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
    <Gradient />
  </Svg>
);

const BookmarkIcon = ({ style }) => (
  <Svg style={style}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
    <Gradient />
  </Svg>
);

const CommentIcon = () => (
  <Svg>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
    <Gradient />
  </Svg>
);

const SettingsIcon = () => (
  <Svg>
    <path d="M0,0h24v24H0V0z" fill="none" />
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />

    <Gradient />
  </Svg>
);

const LockIcon = () => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    style={{
      fill: "white",
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
  </svg>
);

const KeyIcon = () => (
  <Svg>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    <Gradient />
  </Svg>
);

const HomeIconCrumbs = ({ color = "white" }) => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    style={{
      fill: color,
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    <Gradient />
  </svg>
);

const HomeIcon = () => (
  <Svg>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </Svg>
);

const FlashIcon = () => (
  <Svg>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M7 2v11h3v9l7-12h-4l4-8z" />
    <Gradient />
  </Svg>
);

const StarsIcon = () => (
  <Svg>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" />
    <Gradient />
  </Svg>
);

const AppsIcon = () => (
  <Svg>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
    <Gradient />
  </Svg>
);

const SendIcon = () => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    style={{
      fill: "white",
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);
const LightModeIcon = ({ color = "white" }) => (
  <svg
    enableBackground="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    style={{
      fill: color,
    }}
  >
    <rect fill="none" height="24" width="24" />
    <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" />
  </svg>
);

const DarkModeIcon = ({ color = "white" }) => (
  <svg
    enableBackground="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    style={{
      fill: color,
    }}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <g>
          <path d="M14,2c1.82,0,3.53,0.5,5,1.35C16.01,5.08,14,8.3,14,12s2.01,6.92,5,8.65C17.53,21.5,15.82,22,14,22C8.48,22,4,17.52,4,12 S8.48,2,14,2z" />
        </g>
      </g>
    </g>
  </svg>
);

const AddIcon = () => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    style={{
      fill: "white",
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);

const SearchIcon = () => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    style={{
      fill: "white",
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const TranslateIcon = ({ color = "white" }) => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    style={{
      fill: color,
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
  </svg>
);

const LogoutIcon = ({ color = "white" }) => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    style={{
      fill: color,
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
  </svg>
);

const MenuIcon = () => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    style={{
      fill: "white",
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

const ImageIcon = () => (
  <svg
    height="48"
    viewBox="0 0 24 24"
    width="48"
    style={{
      fill: "#525AC9",
    }}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.9 13.98l2.1 2.53 3.1-3.99c.2-.26.6-.26.8.01l3.51 4.68c.25.33.01.8-.4.8H6.02c-.42 0-.65-.48-.39-.81L8.12 14c.19-.26.57-.27.78-.02z" />
  </svg>
);

const VideoIcon = () => (
  <svg
    height="48"
    viewBox="0 0 24 24"
    width="48"
    style={{
      fill: "#DE6161",
    }}
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M18,10.48V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4.48l3.15,3.13 C21.46,16.97,22,16.74,22,16.3V7.7c0-0.44-0.54-0.67-0.85-0.35L18,10.48z M5.6,15.2l1.38-1.83c0.2-0.27,0.6-0.27,0.8,0L9,15 l2.23-2.97c0.2-0.27,0.6-0.27,0.8,0l2.38,3.17c0.25,0.33,0.01,0.8-0.4,0.8H6C5.59,16,5.35,15.53,5.6,15.2z" />
    </g>
  </svg>
);

const UploadIcon = () => (
  <svg
    height="36"
    viewBox="0 0 24 24"
    width="36"
    style={{
      fill: "#DE6161",
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
  </svg>
);

const ArrowBackIcon = ({ color = "white" }) => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    style={{
      fill: color,
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </svg>
);

const NavigateNextIcon = ({ color = "white" }) => (
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    style={{
      fill: color,
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 50 50"
    width="24px"
    height="24px"
    style={{
      fill: "#525AC9",
      flexGrow: 1,
    }}
  >
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z" />
  </svg>
);

const GoogleIcon = () => (
  <svg
    style={{
      fill: "#DE6161",
      flexGrow: 1,
    }}
    viewBox="0 0 30 30"
    width="24px"
    height="24px"
  >
    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    height="22"
    viewBox="0 0 24 24"
    width="22"
    style={{
      fill: "#19C52A",
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const ErrorIcon = () => (
  <svg
    height="22"
    viewBox="0 0 24 24"
    width="22"
    style={{
      fill: "#D41117",
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    height="22"
    viewBox="0 0 24 24"
    width="22"
    style={{
      fill: "#525AC9",
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
);

const CloseIcon = () => (
  <svg
    height="22"
    viewBox="0 0 24 24"
    width="22"
    style={{
      fill: 'url("#gradient")',
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    <Gradient />
  </svg>
);

const EmailIcon = () => (
  <svg
    height="24"
    viewBox="0 0 26 26"
    width="24"
    style={{
      fill: "#656565",
      flexGrow: 1,
    }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export {
  AddIcon,
  AppsIcon,
  ArrowBackIcon,
  BookmarkIcon,
  CheckIcon,
  CloseIcon,
  CommentIcon,
  DarkModeIcon,
  EmailIcon,
  ErrorIcon,
  FacebookIcon,
  FlashIcon,
  GoogleIcon,
  HeartIcon,
  HeartBrokenIcon,
  HomeIcon,
  HomeIconCrumbs,
  ImageIcon,
  InfoIcon,
  LightModeIcon,
  LogoutIcon,
  LockIcon,
  KeyIcon,
  MenuIcon,
  NavigateNextIcon,
  SearchIcon,
  SendIcon,
  SettingsIcon,
  ShareIcon,
  StarsIcon,
  TranslateIcon,
  VideoIcon,
  UploadIcon,
};
