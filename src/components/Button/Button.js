
import React, { Fragment } from 'react'
import '../../styles.css';
import './button.css'
import clsx from 'clsx'
import DropDownIcon from '../../iconComponents/DropDown'
// import { CopyBlock } from 'react-code-blocks'
export const Button = ({
  /**
   * className :-
   *
   * If `present`, button overrides the default 
   * Default - empty
   */
  className,
  /**
   * On Click :-
   *
   * If `present`, the action is triggered on click,
   * Default - empty
   */
  onClick,
  /**
   * Disbaled:-
   *
   * If `true`, button's on-click/on-hover actions are disabled,
   * Default - empty
   */
  disabled,
  /**
   * :-
   *
   * If `present`, button overrides the default 
   * Default - empty
   */
  style,
  /**
   * Selectable :-
   *
   * If `true`, button select is enabled,
   * Default - empty
   */
  selectable,
  /**
   * Selected :-
   *
   * If `true`, button is considered selected and filled is applied ,
   * Default - empty
   */
  selected,
  /**
   * Drop Down :-
   *
   * If `true`, a dropdown is presnt on click ,
   * Default - empty
   */
  dropdown = false,
  page = true,
  /**
   * Upper Case :-
   *
   * If `true`, text in button is all in upper case ,
   * Default - true
   */
  uppercase = false,
  /**
   * Filled :-
   *
   * If `true`, button is considered primary ,
   * Default - false
   */
  filled = false,
  /**
   * Border :-
   *
   * If `true`, button is considered secondary ,
   * Default - false
   */
  border = false,
  /**
   * Icon :-
   *
   * If present, the respective icon is embedded inside the button ,
   * Default - false
   */
  icon,
  label,
  children,
  /**
   * Button Group :-
   *
   * If `true`, the button is considered to be within a buttongroup ,
   * Default - false
   */
  buttonGroup,
  /**
   * Id :-
   *
   * If present, the button is considered to have the mentioned ID ,
   * Default - undefined
   */
  id = undefined,
  /**
   * classes :-
   *
   * If present respective keys will be overriding to respective elements ,
   * Default - undefined
   */
  classes,
  error = false,
  helperText = '',
  ...props
}) => {
  const buttonStyle = clsx(
    "root",
    uppercase && "uppercase",
    !filled && !border && !selectable && "link",
    filled && "filled",
    buttonGroup && "buttonGroup",
    border && "border",
    page && "page",
    disabled && "disabled",
    selectable && "selectable",
    selected && "selected",
    border && error && "error",
    className
  )

  return (
    <>
      <button
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        className={buttonStyle}
        data-testid={id || 'Button'}
        style={style}
        {...props}
      >
        {!!icon && (
          <div
            data-testid='icon'
            className={clsx("icon", classes && classes.icon)}
          >
            {icon}
          </div>
        )}
        <span
          className={clsx(
            "content",
            border && "border",
            filled && "filled",
            !filled && !border && !buttonGroup && !selectable && "link",
            page && "page",
            disabled && "disabled",
            classes && classes.content
          )}
        >
          {label}
          {children}
        </span>
        {!!dropdown && (
          <div className={clsx("arrow", classes && classes.arrow)}>
            <DropDownIcon
              className={clsx(
                "dropdownIcon",
                disabled && disabled,
                classes && classes.dropdownIcon
              )}
            />
          </div>
        )}
      </button>
      {error && helperText && (
        <div className={clsx(helperText, classes && classes.helperText)}>
          {helperText}
        </div>
      )}
    </>
  )
}
