import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ApiKeyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="key" source="key" />
      </SimpleForm>
    </Create>
  );
};
