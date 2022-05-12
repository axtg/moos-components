# **MButton**

**Author:** Xander Groesbeek  
**Description:**  
The custom HTML `<MButton />` component.

## **Usage**

```html
<MButton type="button">Call to action</MButton>
```

## **Result**
<MButton>Call to action</MButton>

## **Slots**

| Name      | Description                    |
| --------- | ------------------------------ |
| `default` | Use this slot to set the label |

## **Props**

| Name              | Type      | Description                                                                                                                                                  | Default    |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| `type` *required* | `String`  | Use this directive to create two-way data bindings with the component. It automatically picks the correct way to update the element based on the input type. | `"submit"` |
| `disabled`        | `Boolean` | This Boolean property indicates that the user cannot interact with the control.                                                                              | `false`    |

