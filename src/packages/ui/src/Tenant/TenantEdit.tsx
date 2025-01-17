import { TenantService, TenantUpdateDto } from "@abpreact/proxy";
import { QueryNames } from "@abpreact/hooks";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import {DialogWrapper} from "../Shared/DialogWrapper";

export type TenantEditProps = {
  name: string;
  id: string;
  isOpen: boolean;
  closeModal: () => void;
};

export const TenantEdit = (props: TenantEditProps) => {
  const [name, setName] = useState<string>();
  var queryClient = useQueryClient();
  const tenantUpdate = async () => {
    var tenant = {} as TenantUpdateDto;
    tenant.name = name!;
    var updated = await TenantService.tenantUpdate(props.id, tenant);
    if (updated) {
      queryClient.invalidateQueries([QueryNames.GetTenants]);
      props.closeModal();
      Swal.fire("Updated!", "Tenant updated successfully!", "success");
    }
  };

  useEffect(() => {
    setName(props.name);
  }, [props.name]);

  return (
    <DialogWrapper
      isOpen={props.isOpen}
      title="Edit tenant"
      onClose={props.closeModal}
    >
      <div className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="name"
            className="text-sm text-gray-700 block mb-1 font-medium"
          >
            Name
          </label>
          <input
            className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            placeholder="Enter your tenant name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="space-x-4 mt-8 float-right">
        <button
          onClick={props.closeModal}
          className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          onClick={tenantUpdate}
          type="button"
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
        >
          Save
        </button>
      </div>
    </DialogWrapper>
  );
};