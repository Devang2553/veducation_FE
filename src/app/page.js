import Input from "@/components/InputComponent";

export default function Home() {
  return (
    <div>
      <Input
        label={"FIRST NAME"}
        placeholder={"Name"}
        type={"text"}
        id="Name"
        required
      />
      <Input
        label={"LAST NAME ."}
        placeholder={"Last Name"}
        type={"text"}
        id="Last"
        required
      />
      <Input
        label={"EMAIL ."}
        placeholder={"tam@uf.net"}
        type={"email"}
        id="Email"
        required
      />
      <Input
        label={"PHONE"}
        placeholder={"232-085-5458"}
        type={"number"}
        id="Phone"
        required
      />
      <Input
        label={"STREET"}
        placeholder={"179 kaylie crossroad"}
        id="Street"
        type={"text"}
        required
      />
      <Input
        label={"POSTCODE"}
        placeholder={"+800000"}
        id="Postcode"
        type={"number"}
        required
      />
      <Input
        label={"COUNTRY"}
        placeholder={"USA"}
        type={"text"}
        id="Country"
        required
      />
      <Input
        label={"CITY"}
        placeholder={"Texas"}
        type={"text"}
        id="City"
        required
      />
      <Input
        label={"ORDER NOTE"}
        placeholder={"Special Note for delivery"}
        type={"text"}
        id="Ordernote"
        required
      />
    </div>
  );
}
