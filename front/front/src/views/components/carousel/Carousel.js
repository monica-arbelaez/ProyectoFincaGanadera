import React, {useState, useEffect} from "react";
import CarouselLayout from "./CarouselLayout";
import CarouselSlide from "./CarouselSlide";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const timesForEach = () => {
  const width = window.innerWidth;
  if (width <= 767) {
    return 1;
  }
  if (width > 767 && width <= 992) {
    return 2;
  }
  if (width > 992) {
    return 3;
  }
};

const segmentAnimals = (dataList, times) => {
  const segmentedAnimals = [];
  for (let i = 0; i < dataList.length; i += times) {
    let chunk = dataList.slice(i, i + times);
    segmentedAnimals.push(chunk);
  }
  return segmentedAnimals;
};

const Carousel = (props) => {
  const list = props.list;
  const pastureId = list[0].pastureId ? list[0].pastureId.id : "sinPasture";

  const [segmentedAnimals, setSegmets] = useState(
    segmentAnimals(list, timesForEach())
  );

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      const numbForEach = timesForEach();
      const segmentsAnimals = segmentAnimals(props.list, numbForEach);
      setSegmets(segmentsAnimals);
    }, 40);

    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <CarouselLayout index={props.index}>
      <CarouselSlide
        segmentedAnimals={segmentedAnimals}
        pastureId={pastureId}
      />
    </CarouselLayout>
  );
};

export default Carousel;
