# Swift

Swift standard library protocols and types used across the Phi SDK bindings.

## Documented Protocols

| Protocol | Description |
|----------|-------------|
| `IteratorProtocol` | Sequence iteration contract |
| `Sequence` | Lazy/sequential access to elements |
| `RangeReplaceableCollection` | Mutable collection with range replacement |
| `RawRepresentable` | Bridging between Swift enums and raw values |
| `OptionSet` | Bitmask-style set of options |
| `Sendable` | Thread-safe value type marker |
| `String` | Unicode string manipulation |

## Memory Management

| Topic | Description |
|-------|-------------|
| `Manual Memory Management` | `UnsafeMutablePointer`, `UnsafeBufferPointer` |
| `OpaquePointer` | Type-erased C pointer bridging |

## Phi Usage

These Swift protocols inform the design of Rust traits in the Phi crates. For example, `Sequence` maps to `Iterator` in Rust, and `OptionSet` maps to bitflag structs.
