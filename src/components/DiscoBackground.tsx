import discoBall from "../assets/disco-ball.png";

export default function DiscoBackground() {
  return (
    <>
      {/* Fondo general */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">

        {/* Degradado principal */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5b5b5b] via-[#2c2c2c] to-[#111111]" />

        {/* Halo superior */}
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-white/10 blur-[180px]" />

        {/* Halo izquierdo */}
        <div className="absolute top-[250px] left-[-200px] w-[700px] h-[700px] rounded-full bg-white/5 blur-[180px]" />

        {/* Halo derecho */}
        <div className="absolute bottom-[-250px] right-[-200px] w-[700px] h-[700px] rounded-full bg-white/5 blur-[180px]" />

        {/* Reflector izquierdo */}
        <div className="spotlight spotlight-left" />

        {/* Reflector derecho */}
        <div className="spotlight spotlight-right" />
      </div>

      {/* Bola principal */}
      <img
        src={discoBall}
        alt=""
        className="fixed
        top-[-130px]
        right-[-130px]
        w-[430px]
        opacity-45
        pointer-events-none
        select-none
        animate-discoball
        -z-10"
      />

      {/* Bola secundaria */}
      <img
        src={discoBall}
        alt=""
        className="fixed
        bottom-[-80px]
        left-[-80px]
        w-[350px]
        opacity-30
        pointer-events-none
        select-none
        animate-discoball2
        -z-10"
      />
    </>
  );
}