### /places/

#### GET
##### Summary

List all places.

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Places successfully obtained. | [ [Places](#places) ] |
| 500 | Internal Server Error | object |

#### POST
##### Summary

Create a place.

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| place | body | Add a place | Yes | [Places](#places) |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | Places successfully registered. | object |
| 400 | Bad Request | object |
| 500 | Internal Server Error | object |

### /places/availabilty

#### GET
##### Summary

List available places for a given distance and time.

##### Description

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| x | query |  | Yes | string |
| y | query |  | Yes | string |
| mts | query |  | Yes | string |
| hr | query |  | Yes | string |

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Places available successfully obtained. | [ [AvailablePlaces](#availableplaces) ] |
| 400 | Bad Request |  |
| 500 | Internal Server Error |  |

### Models

#### Places

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | _Example:_ `"Restaurante"` | Yes |
| x | number | _Example:_ `27` | Yes |
| y | number | _Example:_ `12` | Yes |
| opened | string | _Example:_ `"12:00"` | No |
| closed | string | _Example:_ `"18:00"` | No |

#### AvailablePlaces

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | string | _Example:_ `"Praça"` | No |
| status | string | _Example:_ `"Aberto"` | No |
