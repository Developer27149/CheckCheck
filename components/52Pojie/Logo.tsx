import logoImg from "data-base64:~assets/52.png"

export default () => {
  return (
    <div className="flex items-center">
      <img src={logoImg} className="w-8 h-8 relative left-[4px]" alt="logo" />
      <svg
        width="138"
        height="27"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 150"
        style={{
          background: "transparent"
        }}>
        <defs>
          <filter
            id="editing-lego"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%">
            <feFlood flood-color="#000" result="f1"></feFlood>
            <feFlood flood-color="#ff0" result="f2"></feFlood>
            <feMorphology
              operator="dilate"
              radius="3"
              in="SourceAlpha"></feMorphology>
            <feConvolveMatrix
              order="5,5"
              divisor="1"
              result="cm1"
              kernelMatrix="0 1 1 1 0  1 0 0 0 1  1 0 0 0 1  1 0 0 0 1  0 1 1 1 0"></feConvolveMatrix>
            <feComposite
              operator="in"
              in="f1"
              in2="cm1"
              result="c1"></feComposite>
            <feMorphology operator="dilate" radius="3"></feMorphology>
            <feConvolveMatrix
              order="5,5"
              divisor="1"
              result="cm2"
              kernelMatrix="0 1 1 1 0  1 0 0 0 1  1 0 0 0 1  1 0 0 0 1  0 1 1 1 0"></feConvolveMatrix>
            <feComposite
              operator="in"
              in="f2"
              in2="cm2"
              result="c2"></feComposite>
            <feMerge>
              <feMergeNode in="c2"></feMergeNode>
              <feMergeNode in="c1"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        <text
          x="-40"
          y="110"
          filter="url(#editing-lego)"
          fill="#fff"
          style={{ fontSize: "120px" }}>
          吾爱破解
        </text>
      </svg>
    </div>
  )
}
