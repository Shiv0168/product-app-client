import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const nav = useNavigate();

  const onSubmit = async (data) => {
    try {
      await fetch("http://localhost:8080/api/v1/product", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      });
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="max-w-sm mx-auto my-20"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {/* product name */}
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-white-900 dark:text-grey"
        >
          Product Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "product name required !!!",
          })}
          className="bg-white-50 border border-white-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="enter product name here ..."
        />
        {errors.name && (
          <p className="text-red-500 mt-1 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* product description */}
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-white-900 dark:text-grey"
        >
          Product description
        </label>
        <input
          type="text"
          id="description"
          {...register("description", {
            required: "product description required !!!",
          })}
          className="bg-white-50 border border-white-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="enter product description here ..."
        />
        {errors.description && (
          <p className="text-red-500 mt-1 text-sm">
            {errors.description.message}
          </p>
        )}
      </div>
      {/* product price */}
      <div className="mb-5">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-white-900 dark:text-grey"
        >
          Product Price
        </label>
        <input
          type="number"
          id="price"
          {...register("price", {
            required: "product price required !!!",
          })}
          className="bg-white-50 border border-white-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="enter product price here ..."
        />
        {errors.price && (
          <p className="text-red-500 mt-1 text-sm">{errors.price.message}</p>
        )}
      </div>

      {/* product image */}
      <div className="mb-5">
        <label
          htmlFor="image"
          className="block mb-2 text-sm font-medium text-white-900 dark:text-grey"
        >
          Product Image Url
        </label>
        <input
          type="text"
          id="image"
          {...register("image", {
            required: "product image required !!!",
          })}
          className="bg-white-50 border border-white-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="enter product image url here ..."
        />
        {errors.image && (
          <p className="text-red-500 mt-1 text-sm">{errors.image.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
