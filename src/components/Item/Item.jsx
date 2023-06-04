export const Item = (props) => {
    const {img} = props
  return (
    <div className="w-full sm:w-1/2 lg:w-1/2 p-2">
    <a href="#" className="block group border border-gray-300 rounded-lg p-4">
      <img
        src={img}
        alt=""
        className="h-auto w-full object-cover"
      />

      <div className="mt-3">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          Small Headphones
        </h3>

        <p className="mt-1.5 max-w-[40ch] text-xs text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          quibusdam ab maiores placeat odio id?
        </p>
      </div>
    </a>
    </div>
  );
};
