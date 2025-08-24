import { useEffect, useMemo, useRef, useState } from "react";
import Calendar from "react-calendar";
import { useField, useFormikContext } from "formik";
import { format } from "date-fns";
import "react-calendar/dist/Calendar.css";
import s from "./DatePicker.module.css";

export default function DatePopoverField({
    name,
    minDate,
}) {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const today = useMemo(() => {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    }, []);
    useEffect(() => {
        const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        const onEsc = (e) => { if (e.key === "Escape") setOpen(false); };
        document.addEventListener("mousedown", onDoc);
        document.addEventListener("keydown", onEsc);
        return () => {
        document.removeEventListener("mousedown", onDoc);
        document.removeEventListener("keydown", onEsc);
        };
    }, []);

    const value = field.value || null;

    return (
        <div className={s.wrap} ref={ref}>
            <input
                type="text"
                readOnly
                placeholder="Booking date*"
                className={`${s.input} ${meta.touched && meta.error ? s.invalid : ""}`}
                value={value ? format(value, "yyyy-MM-dd") : ""}
                onClick={() => setOpen(v => !v)}
            />

            {open && (
                <div className={s.popover}>
                <Calendar
                    value={value}
                    onChange={(d) => { setFieldValue(name, d); setOpen(false); }}
                    calendarType="iso8601"
                    locale="en-US"
                    prevLabel="‹"
                    nextLabel="›"
                    prev2Label={null}
                    next2Label={null}
                    minDate={minDate ?? today}
                    formatShortWeekday={(locale, date) =>
                    new Intl.DateTimeFormat("en-US", { weekday: "short" })
                        .format(date).slice(0, 3).toUpperCase()
                    }
                    formatMonthYear={(locale, date) =>
                    new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" })
                        .format(date)
                    }
                />
                </div>
            )}

            {meta.touched && meta.error && <div className={s.error}>{meta.error}</div>}
        </div>
    );
}
