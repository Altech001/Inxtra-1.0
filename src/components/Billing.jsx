import Button from './Button'
import styles, { layout } from "../style";

const Billing = () => (
  <section
    id="product"
    className="{layout.sectionReverse} w-full h-fit border rounded"
  >
    <div className={layout.sectionImgReverse}>
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>
    <div className="">
      <h1 className={styles.flexCenter}>
        <div className="flex flex-col justify-center items-center">
        <p className='text-[2rem] font-extrabold text-gray-400 pt-[1rem]'>Select Your Software Application </p>
        <p className='font-bold text-gray-500'>Load the Inxtra for the installation to begin</p>
        </div>
      </h1>
    </div>
    <div className=" p-4 m-2 flex items-center flex-col">
      <div className="md:grid md:grid-cols-2 xs:flex xs:flex-wrap xs:justify-around gap-2">
      <fieldset>
        <legend className="text-lg font-medium text-gray-100">
          Web Browsers
        </legend>

        <p className="mt-1 text-pretty text-sm text-gray-400">
          Web browsers allow users to access and interact with content on the
          World Wide Web.
        </p>

        <div className="mt-4 space-y-2">
          <label
            htmlFor="Option1"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded checked:bg-indigo-900 border-gray-300"
                id="Option1"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-100">
                Chrome
              </strong>
            </div>
          </label>

          <label
            htmlFor="Option2"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Option2"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-100 ">
                Opera Mini
              </strong>
            </div>
          </label>

          <label
            htmlFor="Option3"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300 "
                id="Option3"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-100">Firefox </strong>
            </div>
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-lg font-medium text-indigo-100">
        Utilities
        </legend>

        <p className="mt-1 text-pretty text-sm text-gray-400">
        Utility software provides additional functionality and maintenance tools to 
        optimize system performance, manage files, and troubleshoot issues. It includes tools for disk management,
        system optimization, data backup, and recovery.
        </p>

        <div className="mt-4 space-y-2">
          <label
            htmlFor="Option1"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded checked:bg-indigo-900 border-gray-300"
                id="Option1"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-100">
              WinZip
              </strong>
            </div>
          </label>

          <label
            htmlFor="Option2"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Option2"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-100 ">
                7-Zip
              </strong>
            </div>
          </label>

          <label
            htmlFor="Option3"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300 "
                id="Option3"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-100">EaseUs TodoBackup </strong>
            </div>
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-lg font-medium text-gray-100">
        Security Software
        </legend>

        <p className="mt-1 text-pretty text-sm text-gray-400">
        Security software helps protect computers and data from malware, viruses, unauthorized access, and other cybersecurity threats.
        It includes tools for antivirus scanning, firewall protection, encryption, and secure internet browsing
        </p>

        <div className="mt-4 space-y-2">
          <label
            htmlFor="Option1"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded checked:bg-indigo-900 border-gray-300"
                id="Option1"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-100">
                Avast
              </strong>
            </div>
          </label>

          <label
            htmlFor="Option2"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Option2"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-100 ">
                Norton
              </strong>
            </div>
          </label>

          <label
            htmlFor="Option3"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300 "
                id="Option3"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-100">McAfee </strong>
            </div>
          </label>
          <label
            htmlFor="Option4"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300 "
                id="Option3"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-100">AVG</strong>
            </div>
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-lg font-medium text-gray-100">
        Productivity Software
        </legend>

        <p className="mt-1 text-pretty text-sm text-gray-400">
        Productivity software helps users create, edit,
        and manage documents, spreadsheets, presentations, and other types of digital content for work, education, or personal use.
        </p>

        <div className="mt-4 space-y-2">
          <label
            htmlFor="Option1"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded checked:bg-indigo-900 border-gray-300"
                id="Option1"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-100">
              Adobe Acrobat
              </strong>
            </div>
          </label>

          <label
            htmlFor="Option2"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Option2"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-100 ">
               Open Office Docs
              </strong>
            </div>
          </label>

          <label
            htmlFor="Option3"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300 "
                id="Option3"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-100">Slides </strong>
            </div>
          </label>
        </div>
      </fieldset>
      </div>
    <Button styles={'mt-8 items-center'}/>
    </div>
  </section>
);

export default Billing;
