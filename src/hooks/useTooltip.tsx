import { RefObject, useCallback, useEffect, useState } from 'react';

type UseTooltipProps = {
  targetElRef: RefObject<HTMLElement>;
  tooltipElRef: RefObject<HTMLDivElement>;
  tooltipLocation: 'top' | 'bottom';
  offset: number;
  delay?: number;
};

type Position = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width?: number;
};

export function useTooltip({
  targetElRef,
  tooltipElRef,
  tooltipLocation,
  offset,
  delay = 800,
}: UseTooltipProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [position, setposition] = useState<Position>({});

  useEffect(() => {
    if (!targetElRef.current) {
      return;
    }

    if (isVisible) {
      const { left, width, bottom, top } =
        targetElRef.current.getBoundingClientRect();
      const tooltipWidth =
        tooltipElRef?.current?.getBoundingClientRect().width || 0;
      const tooltipHeight =
        tooltipElRef?.current?.getBoundingClientRect().height || 0;
      const middle = left + width / 2 - tooltipWidth / 2;

      const topPos =
        tooltipLocation === 'bottom'
          ? bottom + offset
          : top - (tooltipHeight + offset);
      setposition({
        top: topPos,
        left: middle,
        width,
      });
    }

    if (!isVisible) {
      const timer = setTimeout(() => {
        setposition({});
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, targetElRef, tooltipElRef]);

  const onMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  return {
    position: {
      top: position.top ?? 0,
      right: position.right ?? 0,
      bottom: position.bottom ?? 0,
      left: position.left ?? 0,
      width: position.width ?? 0,
    },
    isVisible,
    onMouseEnter,
    onMouseLeave,
  };
}
