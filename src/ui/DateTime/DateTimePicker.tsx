import * as React from "react";
import { DateTime } from "luxon";

import { cn } from "../../lib/utils";
import { SelectSingleEventHandler } from "react-day-picker";
import { Label } from "../label";
import { Input } from "../input";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { Icon } from "@iconify/react";

interface DateTimePickerProps {
  date: Date;
  setDate: (date: Date) => void;
}

export const DateTimePicker = ({ date, setDate }: DateTimePickerProps) => {
  const [selectedDateTime, setSelectedDateTime] = React.useState<DateTime>(
    DateTime.fromJSDate(date)
  );

  const handleSelect: SelectSingleEventHandler = (selected: any) => {
    const selectedDay = DateTime.fromJSDate(selected);
    const modifiedDay = selectedDay.set({
      hour: selectedDateTime.hour,
      minute: selectedDateTime.minute,
    });

    setSelectedDateTime(modifiedDay);
    setDate(modifiedDay.toJSDate());
  };

  const handleTimeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const hours = Number.parseInt(value.split(":")[0] || "00", 10);
    const minutes = Number.parseInt(value.split(":")[1] || "00", 10);
    var modifiedDay = selectedDateTime.set({
      hour: hours,
      minute: minutes,
    });
    setSelectedDateTime(modifiedDay);
    setDate(modifiedDay.toJSDate());
  };

  const footer = (
    <>
      <div className="px-4 pt-0 pb-4">
        <Label>Time</Label>
        <Input
          type="time"
          step="1"
          onChange={handleTimeChange}
          value={selectedDateTime.toFormat("HH:mm")}
        />
      </div>
      {!selectedDateTime && <p>Please pick a day.</p>}
    </>
  );

  return (
    <Popover>
      <PopoverTrigger asChild className="z-10">
        <Button
          variant={"outline"}
          color="secondary"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-dark"
          )}
        >
          <Icon icon="mdi:calendar-month-outline" className="mr-2 h-4 w-4" />
          {date ? (
            <span className="text-dark">
              {selectedDateTime.toFormat("DDD HH:mm")}
            </span>
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDateTime.toJSDate()}
          onSelect={handleSelect}
          initialFocus
        />
        {footer}
      </PopoverContent>
    </Popover>
  );
};

DateTimePicker.displayName = "DateTimePicker";
