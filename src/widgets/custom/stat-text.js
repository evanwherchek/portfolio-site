function StatText({ number, smallText: text }) {
  return (
    <div className="flex flex-col items-center justify-start">
      <p className="font-poly text-comfort-blue font-thin text-7xl text-center">
        {number}
      </p>
      <p className="font-poly text-white font-thin text-2xl text-center w-40">
        {text}
      </p>
    </div>
  );
}

export default StatText;
