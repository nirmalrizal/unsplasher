# unsplasher

> Download random images from http://unsplash.it/

## Installation

```
npm install -g unsplasher
```

## Usage

```
unsplasher -n <no_of_image> -p <path>
```

## Flags

| Flag       | Description                        | Default    |
| ---------- | ---------------------------------- | ---------- |
| -h, --help | Show help                          |            |
| -p, --path | Path to save images                | unsplashes |
| -n, --num  | Total number of images to download | 10         |

## Examples

### Default

Downloads 10 images in `unsplashes` folder inside the current directory

```
unsplasher
```

### Download 100 image inside images folder

```
unsplasher -n 100 -p images
```
