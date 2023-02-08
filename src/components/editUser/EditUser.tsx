import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import { patchUserRequest, getUser } from "../../API/APIusers";

import "react-toastify/dist/ReactToastify.css";
import styles from "./EditUser.module.scss";

type FormValues = {
  name: string;
  email: string;
  gender: string;
  status: string;
};

const EditUser: React.FC = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [disable, setDisable] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const name = watch("name");
  const email = watch("email");
  const gender = watch("gender");
  const status = watch("status");

  const handleSubmitForm: SubmitHandler<FormValues> = async ({
    name,
    email,
    gender,
    status,
  }): Promise<void> => {
    const data = {
      id: userId,
      dataUser: {
        name,
        email,
        gender,
        status,
      },
    };

    try {
      const response = await patchUserRequest(data);

      if (!response) {
        toast.error("Try again");
        return;
      }
    } catch (err) {
      console.log(err);
    }

    reset();
    toast.success("Success edit");
    navigate("/users");
  };

  useEffect(() => {
    if (name && email && gender && status) {
      setDisable(false);
      return;
    }
    setDisable(true);
  }, [email, status, name, gender]);

  useEffect(() => {
    if (!userId) {
      return;
    }

    (async () => {
      try {
        const response = await getUser(userId);

        if (response) {
          setValue("name", response.name);
          setValue("email", response.email);
          setValue("gender", response.gender);
          setValue("status", response.status);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setValue, userId]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Form user edit</h1>
      <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <div className={styles.inputContainer}>
          <label className={`${styles.lable} ${errors.name && styles.error}`}>
            Name
          </label>
          <input
            className={`${styles.input} ${
              errors.name ? styles.errorInput : ""
            }`}
            type="text"
            {...register("name", {
              required: "This is required",
              minLength: {
                value: 2,
                message: "Min length is 2",
              },
              maxLength: {
                value: 60,
                message: "Max length is 60",
              },
              pattern: {
                value:
                  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                message: "Boris Johnson",
              },
            })}
            placeholder="Your name"
          />
          <p className={`${styles.error} ${!errors.name && styles.opacity}`}>
            {errors.name ? errors.name?.message : "massege error"}
          </p>
        </div>

        <div className={styles.inputContainer}>
          <label className={`${styles.lable} ${errors.email && styles.error}`}>
            Email
          </label>
          <input
            className={`${styles.input} ${
              errors.email ? styles.errorInput : ""
            }`}
            type="email"
            {...register("email", {
              required: "This is required",
              minLength: {
                value: 2,
                message: "Min length is 2",
              },
              maxLength: {
                value: 100,
                message: "Max length is 100",
              },
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: "example@gmail.com",
              },
            })}
            placeholder="Your email"
          />
          <p className={`${styles.error} ${!errors.email && styles.opacity}`}>
            {errors.email ? errors.email?.message : "massege error"}
          </p>
        </div>

        <div className={styles.containerRadio}>
          <p className={styles.text}>
            Select your gender
            <span className={`${styles.error} ${styles.spanRadio}`}>
              {errors.gender?.message}
            </span>
          </p>

          <label className={styles.lableRadio}>
            <input
              className={styles.inputRadio}
              type="radio"
              {...register("gender", {
                required: "This is required",
              })}
              value={"male"}
            />
            <span className={styles.lableSpan}>Male</span>
          </label>

          <label className={styles.lableRadio}>
            <input
              className={styles.inputRadio}
              type="radio"
              {...register("gender", {
                required: "This is required",
              })}
              value={"female"}
            />
            <span className={styles.lableSpan}>Female</span>
          </label>
        </div>

        <div className={styles.containerRadio}>
          <p className={styles.text}>
            Select your status
            <span className={`${styles.error} ${styles.spanRadio}`}>
              {errors.status?.message}
            </span>
          </p>

          <label className={styles.lableRadio}>
            <input
              className={styles.inputRadio}
              type="radio"
              {...register("status", {
                required: "This is required",
              })}
              value={"active"}
            />
            <span className={styles.lableSpan}>Active</span>
          </label>

          <label className={styles.lableRadio}>
            <input
              className={styles.inputRadio}
              type="radio"
              {...register("status", {
                required: "This is required",
              })}
              value={"inactive"}
            />
            <span className={styles.lableSpan}>Inactive</span>
          </label>
        </div>

        <button
          className={`${styles.button} ${disable && styles.disable}`}
          type="submit"
          disabled={disable}
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditUser;
