import { Link } from "react-router-dom";

function Form() {
  return (
    <>
      <section className="bg-gray-100  dark:bg-gray-900">
        <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          {/* <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            class="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Flowbite
        </a> */}
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create Employee
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mobile No
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    id="mobile"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="99XXXXX"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="Designation"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Designation :
                    <select
                      className="px-2"
                      name="Designation"
                      id="designation"
                    >
                      <option value="HR">Select option</option>
                      <option value="HR">HR</option>
                      <option value="Manager">Manager</option>
                      <option value="sales">sales</option>
                    </select>
                  </label>
                </div>
                <div>
                  <label
                    for="email"
                    className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender :
                    <input
                      className="ml-3"
                      type="radio"
                      id="male"
                      name="fav_language"
                      value="HTML"
                    />
                    <label className="" for="html">
                      Male
                    </label>
                    <input
                      className="ml-3"
                      type="radio"
                      id="female"
                      name="fav_language"
                      value="CSS"
                    />
                    <label for="css">Female</label>
                    <br />
                  </label>
                </div>
                <div className="">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Course :
                    <input
                      className="ml-4"
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1"> MCA</label>
                    <input
                      className="ml-4"
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1"> BCA</label>
                    <input
                      className="ml-4"
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1"> BSC</label>
                  </label>
                </div>
                <div className="w-100">
                <label className="w-100" for="img">Select image: <input type="file" id="img" name="img" accept="image/*"/></label>
               
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
