import contact_img from "../../assets/pexels-nisa-18429581.jpg";
import { styles } from "../../style";
function Contact() {
  return (
    <>
    <div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-center text-xs font-semibold leading-normal md:text-sm">
              Share your thoughts
            </p>
          </div>
          <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Love to hear from you
          </p>
          <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
            Drop Us a Line. Get in Touch.
            Reach Out.
          </p>
        </div>
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                  Get in touch
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Our friendly team would love to hear from you.
                </p>
                <form action="" className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className={styles.inputLabelDiv}>
                      <label
                        className={styles.inputLabel}
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <input
                        className={styles.inputForm}
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className={styles.inputLabelDiv}>
                      <label
                        className={styles.inputLabel}
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        className={styles.inputForm}
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className={styles.inputLabelDiv}>
                    <label
                      className={styles.inputLabel}
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className={styles.inputForm}
                      type="text"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className={styles.inputLabelDiv}>
                    <label
                      className={styles.inputLabel}
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className={styles.inputForm}
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className={styles.inputLabelDiv}>
                    <label
                      className={styles.inputLabel}
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className={styles.inputForm}
                      id="message"
                      placeholder="Leave us a message"
                      cols="3"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden h-[600px] w-[687px] rounded-lg object-cover lg:block"
              src={contact_img}
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
