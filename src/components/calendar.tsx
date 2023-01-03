import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  isMonday,
  isSameMonth,
  isSunday,
  nextSunday,
  previousMonday,
  startOfMonth,
  startOfToday,
  subMonths,
} from "date-fns";
import { createMemo, createSignal } from "solid-js";

const classNames = (...values: (string|boolean|undefined|null)[]) => values.filter(Boolean).join(' ');

export const Calendar = () => {

  const [firstDayInMonth, setFirstDayInMonth] = createSignal(startOfMonth(startOfToday()));

  const monthName = createMemo(() => firstDayInMonth().toLocaleString("de-DE", {
    month: "long",
  }))

  const calendarDays = createMemo(() => {
    const monthDay = firstDayInMonth();
    const firstCalendarDay = isMonday(monthDay)
    ? monthDay
    : previousMonday(monthDay);
    const lastDayOfMonth = endOfMonth(monthDay);
    const lastCalendarDay = isSunday(lastDayOfMonth)
      ? lastDayOfMonth
      : nextSunday(lastDayOfMonth);
      return eachDayOfInterval({
        start: firstCalendarDay,
        end: lastCalendarDay,
      });
  });

  const incMonth = () => setFirstDayInMonth(last => addMonths(last, 1));
  const decMonth = () => setFirstDayInMonth(last => subMonths(last, 1));

  return (
    <div class="mt-6">
      <div class="flex items-center">
        <h2 class="flex-auto grow text-center font-semibold text-gray-900">{monthName()} {firstDayInMonth().getFullYear()}</h2>
    <button onclick={decMonth} type="button" class="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
      <span class="sr-only">Previous month</span>
      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
      </svg>
    </button>
    <button onclick={incMonth} type="button" class="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
      <span class="sr-only">Next month</span>
      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
      <section class="text-center">
        <div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
          <div>M</div>
          <div>D</div>
          <div>M</div>
          <div>D</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>
        </div>
        <div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
          {calendarDays().map((date, ix) => {
            const isTopLeft = ix === 0;
            const isTopRight = ix === 6;
            const isBottomLeft = ix === calendarDays.length -7;
            const isBottomRight = ix === calendarDays.length - 1;
            const inCurrentMonth = isSameMonth(firstDayInMonth(), date);

            return (
              <button
                type="button"
                class={classNames(
                  isTopLeft && 'rounded-tl-lg',
                  isTopRight && 'rounded-tr-lg',
                  isBottomLeft && 'rounded-bl-lg',
                  isBottomRight && 'rounded-br-lg',
                  inCurrentMonth ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-400',
                  "relative py-1.5 hover:bg-gray-100 focus:z-10")}
              >
                <time
                  datetime={format(date, "yyyy-mm-dd")}
                  class="mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                >
                  {format(date, "d")}
                </time>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
