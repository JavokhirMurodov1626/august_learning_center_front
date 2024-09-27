import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PatternFormat } from "react-number-format";
import { CustomInput } from "@/localComponents";
import { Formik, Form } from "formik";
import { Checkbox } from "@/components/ui/checkbox";
import ReactSelect from "react-select";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

type props = {
  children: React.ReactNode;
};

interface FormValues {
  name: string;
  surname: string;
  middle_name: string;
  main_phone: string;
  additional_phone: string;
  is_graduated: boolean;
  grade: string;
  interests: string[];
  source: string;
  comment: string;
}
const initialValues: FormValues = {
  name: "",
  surname: "",
  middle_name: "",
  main_phone: "",
  additional_phone: "",
  is_graduated: false,
  grade: "",
  interests: [], // Starts as an empty array
  source: "",
  comment: "",
};

const interests = [
  {
    value: 1,
    label: "Ingliz tili",
  },
  {
    value: 2,
    label: "Rus tili",
  },
  {
    value: 3,
    label: "Ona tili",
  },
  {
    value: 4,
    label: "Koreys tili",
  },
  {
    value: 5,
    label: "Matematika",
  },
];

const sources = [
  { value: 1, label: "Tanish-bilish" },
  { value: 2, label: "Telegram" },
  { value: 3, label: "Instagram" },
  { value: 4, label: "Banner" },
];
const AddStudentFormModal: React.FC<props> = ({ children }) => {
  return (
    <Dialog modal={true}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="max-w-3xl"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle className="mb-3 text-2xl">
            Yangi o'quvchi qo'shish
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            setFieldValue,
          }) => (
            <Form className="grid grid-cols-2 gap-x-3 gap-y-4">
              <CustomInput
                label="Ism"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
                touched={touched.name}
                placeholder="Kiriting"
              />
              <CustomInput
                label="Familiya"
                name="surname"
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.surname}
                touched={touched.surname}
                placeholder="Kiriting"
              />

              <CustomInput
                label="Otasining ismi (ixtiyoriy)"
                name="middle_name"
                value={values.middle_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.middle_name}
                touched={touched.middle_name}
                placeholder="Kiriting"
              />
              <CustomInput
                label="Telefon raqam (ota/ona)"
                touched={touched.main_phone}
                error={errors.main_phone}
              >
                <PatternFormat
                  name="main_phone"
                  placeholder="+998 (##) ### ## ##"
                  format="+998 (##) ###-##-##"
                  value={values.main_phone}
                  onValueChange={({ value }) => {
                    setFieldValue("main_phone", value);
                  }}
                  valueIsNumericString={true}
                  className="input"
                />
              </CustomInput>

              <CustomInput
                label="O'quvchi telefon raqami (ixtiyoriy)"
                touched={touched.additional_phone}
                error={errors.additional_phone}
              >
                <PatternFormat
                  name="additional_phone"
                  placeholder="+998 (##) ### ## ##"
                  format="+998 (##) ###-##-##"
                  value={values.additional_phone}
                  onValueChange={({ value }) => {
                    setFieldValue("additional_phone", value);
                  }}
                  valueIsNumericString={true}
                  className="input"
                />
              </CustomInput>

              <div className="flex items-center space-x-2">
                <Checkbox
                  name="is_graduated"
                  id="is_graduated"
                  checked={values.is_graduated}
                  onCheckedChange={(checked) => {
                    setFieldValue("is_graduated", checked);
                  }}
                />
                <label
                  htmlFor="is_graduated"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Maktabni bitirganmi?
                </label>
              </div>
              {!values.is_graduated && (
                <CustomInput
                  label="Maktabi darajasi (sinf)"
                  name="grade"
                  value={values.grade}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.grade}
                  touched={touched.grade}
                  placeholder="Kiriting"
                />
              )}

              <CustomInput
                label="Qiziqishlari (fanlar)"
                touched={touched.interests}
                error={errors.interests}
              >
                <ReactSelect
                  options={interests}
                  className="input-select"
                  isMulti
                  onChange={(selected) => {
                    setFieldValue("interests", selected);
                  }}
                  noOptionsMessage={() => "Fanlar mavjud emas"}
                  placeholder="Fanlarni tanlang"
                />
              </CustomInput>

              <CustomInput
                label="Qayerdan kelgan?"
                error={errors.source}
                touched={touched.source}
                className={`${
                  values.is_graduated ? " " : "col-start-1 col-end-3"
                }`}
              >
                <ReactSelect
                  name="source"
                  options={sources}
                  className="input-select"
                  onChange={(option) => {
                    setFieldValue("source", option?.value);
                  }}
                  noOptionsMessage={() => "Manbalar mavjud emas"}
                  placeholder="Manbani tanlang"
                  value={sources.find(
                    (option) => option.value === values.source
                  )}
                />
              </CustomInput>

              <CustomInput
                className={`${
                  values.is_graduated
                    ? "row-start-5 row-end-6"
                    : "row-start-6 row-end-7"
                } col-start-1 col-end-3`}
                label="Izoh qoldiring (ixtiyoriy)"
                error={errors.comment}
                touched={touched.comment}
              >
                <textarea
                  className="input"
                  rows={5}
                  placeholder="Kiriting..."
                ></textarea>
              </CustomInput>

              <Button
                disabled={true}
                type="submit"
                variant="destructive"
                className="w-auto col-start-2 justify-self-end px-9  select-none"
              >
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Saqlash
              </Button>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddStudentFormModal;
