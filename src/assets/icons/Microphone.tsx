type TMicrophoneProps = {
  width: number,
  height: number,
  color: string,
  onClick: () => void
};

const Microphone = ({ width, height, color, onClick }: TMicrophoneProps) => {
  return (
    <svg
      id="Layer_1"
      width={width}
      height={height}
      viewBox="0 0 470 470"
      cursor={"pointer"}
      onClick={onClick}
      // style="enable-background:new 0 0 470 470;"
    >
      <g>
        <path fill={color} d="M235,302.296c47.177,0,85.423-38.245,85.423-85.423V85.423C320.423,38.245,282.177,0,235,0s-85.423,38.245-85.423,85.423
          v131.451C149.577,264.051,187.823,302.296,235,302.296z"/>
        <path fill={color} d="M350.423,136.148v30h15v50.726c0,71.915-58.508,130.423-130.423,130.423s-130.423-58.507-130.423-130.423v-50.726h15v-30
          h-45v80.726C74.577,300.273,138.551,369,220,376.589V440h-90.444v30h210.889v-30H250v-63.411
          c81.449-7.589,145.423-76.317,145.423-159.716v-80.726H350.423z"/>
      </g>
    </svg>
  );
};

export default Microphone;