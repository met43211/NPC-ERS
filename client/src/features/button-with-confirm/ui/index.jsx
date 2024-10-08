import { Button } from '@nextui-org/button';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/modal';

import { ConfirmModalContent } from './modal';

export const ButtonWithConfirm = ({
  icon,
  children,
  className,
  description,
  confirmTitle,
  confirmColor,
  actionFn,
  modalIcon,
  ...buttonProps
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        {...buttonProps}
        className={`font-medium ${className}`}
        startContent={icon}
        onPress={onOpen}
      >
        {children}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <ConfirmModalContent
              actionFn={actionFn}
              confirmColor={confirmColor}
              confirmTitle={confirmTitle}
              description={description}
              icon={modalIcon ? modalIcon : icon}
              onClose={onClose}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
