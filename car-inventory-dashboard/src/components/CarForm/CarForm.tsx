import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
// import { chooseAge, choosemodel, chooseName, chooseWeight, chooseFavToy } from '../../redux/slices/rootSlice';
import { Input } from "../sharedComponents/Input";
// import { serverCalls } from '../../api';
// import { useGetData } from '../../custom-hooks';

// add custom hooks and match the models.py in the flask inventory app

interface CarFormProps {
  id?: string;
  data?: {};
}

interface CarState {
  name: string;
  model: string;
  year: number;
  condition: string;
  favorite_toy: string;
}

export const CarForm = (props: CarFormProps) => {
  const dispatch = useDispatch();
  // let { carData, getData } = useGetData();
  const store = useStore();
  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data: any, event: any) => {
    console.log(props.id);
    if (props.id!) {
      // await serverCalls.update(props.id!, data)
      console.log(`Updated: ${data} ${props.id}`);
      window.location.reload();
      event.target.reset();
    }
    //  else {
    //     dispatch(chooseName(data.name))
    //     dispatch(choosemodel(data.model))
    //     dispatch(chooseAge(data.year))
    //     dispatch(chooseWeight(data.condition))
    //     dispatch(chooseFavToy(data.favorite_toy))
    //     await serverCalls.create(store.getState())
    //     window.location.reload()
    // }
    // }
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="Make">Make</label>
            <Input
              {...register("make")}
              name="make"
              placeholder="Enter car make"
            />
          </div>
          <div>
            <label htmlFor="model"></label>
            <Input
              {...register("model")}
              name="model"
              placeholder="Enter Car model"
            />
          </div>
          <div>
            <label htmlFor="year">Age</label>
            <Input
              {...register("year")}
              name="year"
              placeholder="Enter car year"
            />
          </div>
          <div>
            <label htmlFor="condition">Weight</label>
            <Input
              {...register("condition")}
              name="condition"
              placeholder="Enter the car condition"
            />
          </div>

          <Button type="submit" color="error">
            Submit
          </Button>
        </form>
      </div>
    );
  };
};
