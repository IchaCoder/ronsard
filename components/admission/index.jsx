"use client";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";

const Admission = () => {
  const form = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Form {...form}>
        {/* <QRCode value="http://localhost:3000/admission" className="mt-8" /> */}
        <h1 className="flex gap-3 items-center mt-4">
          <Image className="w-12 h-12" src="/logo.png" alt="logo" width={150} height={150} />
          <span className="text-2xl md:text-4xl font-bold uppercase">Ecole Ronsard Bilingual School</span>
        </h1>
        <div className="my-4">
          <h3 className="text-lg md:text-2xl font-semibold">REGULATIONS FOR THE PAYMENT OF SCHOOL FEES </h3>
          <ul className="grid gap-2 mt-8">
            <li>
              Registration and admission fees must be paid before the children can start school. Admission fees are paid
              once upon admission of the pupil in the school.
            </li>
            <li>
              Tuition fees must be paid y the end of each team at the very latest; if payment goes beyond the first
              month , an interest of 5% will be charged.
            </li>
            <li>Fees are not refundable in the event of a pupil being expelled , or in any other circumstances.</li>
          </ul>
          <ul className="grid gap-2 mt-8">
            <li>
              The school board reserves the right to raise the scale of fees during the course of the academic year.
            </li>
            <li>
              In case of payment by local or foreign transfer a copy of the transfer advice, bearing the name of the
              pupil, should be forwarded to the school account office before a receipt will be issued.{" "}
              <span className="font-bold">All bank transfer charges must be paid by parents.</span>
            </li>
            <li>
              Cash or cheque payments can be made directly to the administration office and the receipt will be issued.
            </li>
          </ul>
          <div className="mt-8">
            <FormField
              control={form.control}
              rules={{ required: "This field is required" }}
              name="is_terms_accepted"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-2 items-center">
                    <FormControl>
                      <Input type="checkbox" className="max-w-max !mt-0 !text-xs" {...field} />
                    </FormControl>
                    <FormLabel> I agree to abide by the above regulations.</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row justify-between">
            <FormField
              control={form.control}
              rules={{ required: "This field is required" }}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <div className="flex gap-2 items-center">
                    <FormLabel>Date:</FormLabel>
                    <FormControl>
                      <Input type="date" className="max-w-max !mt-0 !text-xs" {...field} />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>signature of parent or guardian</div>
          </div>
        </div>
        <div className="my-8">
          <h3 className="text-lg md:text-2xl font-semibold">CHECKLIST</h3>
          <ul className="grid gap-2 mt-8">
            <li>3 passport pictures</li>
            <li>Photocopy of ID card</li>
            <li>Vaccination card</li>
            <li>Previous years terminal report</li>
            <li>Payment of admission fees</li>
            <li>Parents/guardians agree to the use of their child's pictures in the school communication materials</li>
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-bold">For Official Use Only</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                rules={{ required: "This field is required" }}
                name="date_of_registration"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex gap-2 flex-col">
                      <FormLabel>Date of Registration:</FormLabel>
                      <FormControl>
                        <Input type="date" className="sm:max-w-max w-full !mt-0 !text-xs" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                rules={{
                  required: "This field is required",
                  //   pattern: {
                  //   value: /^[0-9]+$/,
                  //   message: "Only numbers are allowed",
                  // }
                }}
                name="registration_no"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex gap-2 flex-col">
                      <FormLabel>Registration No.:</FormLabel>
                      <FormControl>
                        <Input type="text" className="sm:max-w-max w-full !mt-0 text-xs" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                rules={{ required: "This field is required" }}
                name="date_of_admission"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex gap-2 flex-col">
                      <FormLabel>Date of Admission:</FormLabel>
                      <FormControl>
                        <Input type="date" className="sm:max-w-max w-full !mt-0 !text-xs" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                rules={{
                  required: "This field is required",
                  //   pattern: {
                  //   value: /^[0-9]+$/,
                  //   message: "Only numbers are allowed",
                  // }
                }}
                name="fee_category"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex gap-2 flex-col">
                      <FormLabel>Fee Category:</FormLabel>
                      <FormControl>
                        <Input type="text" className="sm:max-w-max w-full !mt-0 text-xs" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-4">
              <FormField
                control={form.control}
                name="is_registration_paid"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel> Registration and admission fess paid</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={"no"}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex gap-8">
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="yes" />
                            </FormControl>
                            <FormLabel className="font-normal">Yes</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="no" />
                            </FormControl>
                            <FormLabel className="font-normal">No</FormLabel>
                          </FormItem>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg md:text-2xl font-semibold">REGISTRATION FORM (FILL IN BLOCK LETTERS)</h3>
          <div className="mt-4">
            <h3 className="text-xl uppercase font-bold">PUPIL</h3>
            <div className="grid gap-4 md:grid-cols-2 mt-2">
              <FormField
                control={form.control}
                rules={{ required: "This field is required" }}
                name="child_surname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Child's Surname</FormLabel>
                    <FormControl>
                      <Input type="text" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                rules={{ required: "This field is required" }}
                name="child_first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Child's Firstname</FormLabel>
                    <FormControl>
                      <Input type="text" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                rules={{ required: "This field is required" }}
                name="child_date_of_birth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth</FormLabel>
                    <FormControl>
                      <Input type="date" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                rules={{ required: "This field is required" }}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nationality</FormLabel>
                    <FormControl>
                      <Input type="text" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                rules={{ required: "This field is required" }}
                name="previous_school"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Previous School</FormLabel>
                    <FormControl>
                      <Input type="text" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                rules={{ required: "This field is required" }}
                name="last_year_class"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grade completed last year</FormLabel>
                    <FormControl>
                      <Input type="text" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                rules={{ required: "This field is required" }}
                name="languages_spoken"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Languages spoken at home</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Eg: English, French" className="resize-none" {...field} />
                    </FormControl>
                    <FormDescription>Use comma to separate multiple languages</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-4">
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={"m"}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex gap-8">
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="m" />
                              </FormControl>
                              <FormLabel className="font-normal">M</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="f" />
                              </FormControl>
                              <FormLabel className="font-normal">F</FormLabel>
                            </FormItem>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl uppercase font-bold">PARENTS/GUARDIANS</h3>
            <div className="grid gap-4 md:grid-cols-2 mt-2">
              <FormField
                control={form.control}
                name="father_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Father's/Guardian's name</FormLabel>
                    <FormControl>
                      <Input type="text" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="father_occupation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Father's/guardian Occupation</FormLabel>
                    <FormControl>
                      <Input type="text" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="father_employer_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employer's Address</FormLabel>
                    <FormControl>
                      <Input type="text" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="father_phone"
                rules={{ pattern: { value: /^[0-9]+$/, message: "Only numbers are allowed" } }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Father's/Guardian's Phone Number</FormLabel>
                    <FormControl>
                      <Input type="text" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mother_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mother's/Guardian's name</FormLabel>
                    <FormControl>
                      <Input type="text" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mother_occupation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mother's/Guardian's Occupation</FormLabel>
                    <FormControl>
                      <Input type="text" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mother_employer_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employer's Address</FormLabel>
                    <FormControl>
                      <Input type="text" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mother_phone"
                rules={{ pattern: { value: /^[0-9]+$/, message: "Only numbers are allowed" } }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mother's/Guardian's Phone Number</FormLabel>
                    <FormControl>
                      <Input type="text" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postal_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postal Address (For mailing purpose)</FormLabel>
                    <FormControl>
                      <Textarea className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="residential_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Residential Address</FormLabel>
                    <FormControl>
                      <Textarea className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="parent_email"
                rules={{
                  pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email" },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parents'/Guardians e-mail address(es)</FormLabel>
                    <FormControl>
                      <Input type="email" className="!mt-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="my-4 font-bold text-sm">
              (kindly inform the school if any change occurs in the information stated above)
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-2 mb-4">
            <FormField
              control={form.control}
              name="is_child_has_special_needs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Does your child have any special educational needs?</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={"no"} className="flex flex-col space-y-1">
                      <div className="flex gap-8">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal">Yes</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">No</FormLabel>
                        </FormItem>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="special_needs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>If yes, please specify</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="disease_defect_alergies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>List any disease, physical defects or allergies</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none" {...field} />
                  </FormControl>
                  <FormDescription>Use comma to separate items</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="is_recommended_by_inward"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Were you recommended by an inward?</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={"no"} className="flex flex-col space-y-1">
                      <div className="flex gap-8">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="yes" />
                          </FormControl>
                          <FormLabel className="font-normal">Yes</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="no" />
                          </FormControl>
                          <FormLabel className="font-normal">No</FormLabel>
                        </FormItem>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="inward_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>If yes, state the name</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              rules={{ required: "This field is required" }}
              name="who_is_paying_fees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Who will pay the fees?</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} className="flex flex-col space-y-1">
                      <div className="flex gap-8">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="parents" />
                          </FormControl>
                          <FormLabel className="font-normal">Parents</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="guardian" />
                          </FormControl>
                          <FormLabel className="font-normal">Guardian</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="employer" />
                          </FormControl>
                          <FormLabel className="font-normal">Employer</FormLabel>
                        </FormItem>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="employer_fees_percentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    If fees are to be paid by employer, what percentage will be contributed by them?
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full mb-4">
            {form.formState.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </Form>
    </form>
  );
};

export default Admission;
