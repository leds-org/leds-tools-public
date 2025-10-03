---
sidebar_position: 7
title: Andes GPS Project Lib Architecture
---

# Andes Lib - Documentation

**Andes Lib** is an auxiliary library used by the `andes-gps-projeto` tool. It functions as a **compiler** and provides **interfaces and base classes** that represent elements of the Andes model.

Note that within the library, information is compiled via the IRender class, which, based on a provided indentation, compiles the sent information into the desired format. When you are performing maintenance on the library, this is how you will add information.

-----

## `IRender` Interface

```ts
export default interface IRender {
    public render(identationStartLevel: number = 0): string;
}
```

## `Identation` Interface

```ts
export function identate(times: number = 0): string
{
    return '\t'.repeat(times);
}
```

This interface is responsible for adding \t on any section or subsection you are trying to render. 

## There are other renderes

If you take a look, you'll see that there are many other renditions available to create a new function for the library. They're designed to work with Markdown features like Pages, Sections, Paragraphs, and even Platuml and Mermaid. 

Don't worry, they have similar structures to the renditions you've seen so far.