import { useEffect } from "react";
import {
  bufferCount,
  debounceTime,
  filter,
  fromEvent,
  map,
  scan,
  throttleTime,
} from "rxjs";

export default function Rxjs() {
  useEffect(() => {
    const subscription = fromEvent<MouseEvent>(document, "click")
      //   .pipe(bufferCount(2), debounceTime(3000))
      //   .pipe(
      //     scan((count) => count + 1, 0),
      //     filter((count) => count % 2 === 0)
      //   )
      .pipe(
        throttleTime(1000),
        map((event) => event.clientX),
        filter((x) => x % 2 === 0),
        scan((count, x) => count + x, 0)
      )
      .subscribe((counts) => console.log(`CLICK ${counts} Times!`));

    return () => subscription.unsubscribe();
  }, []);

  return <div></div>;
}
