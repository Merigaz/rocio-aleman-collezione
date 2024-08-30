import {
  Button,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";
import { Checkbox } from "antd";
import type { GetProp } from 'antd';
export default function FilterModal() {
  let [isOpen, setIsOpen] = useState(false);

  const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  
  return (
    <>
      <div className="bg-pinkybg w-40 border border-black flex ">
        <Button
          onClick={open}
          className=" w-40 font-Poly text-[#403834] text-2xl  focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-none  flex flex-row gap-2 justify-center"
        >
          Filtrar
          <Image
            alt="Icono filtro"
            src={"/settings.svg"}
            width={24}
            height={24}
          />
        </Button>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none p-0"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen">
          <div className="flex h-screen  bg-white/5 backdrop-blur-lg">
            <DialogPanel
              transition
              className="w-1/4 h-screen pl-8 pt-8 bg-bgHome bg-cover duration-75 ease-in data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-2xl font-Poly ">
                Categorias
              </DialogTitle>
              <DialogTitle as="h3" className="text-2xl font-Poly py-4 ">
                Filtrar por
              </DialogTitle>
              <Description>
                <Checkbox.Group
                  options={plainOptions}
                  onChange={onChange}
                />
                <br />
                <br />
              </Description>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
