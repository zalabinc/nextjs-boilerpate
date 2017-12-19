import { Map, List, Iterable, Set, OrderedMap, OrderedSet } from 'immutable';

function isImmutable(val) {
  if (Map.isMap(val)) return true;
  if (List.isList(val)) return true;
  if (Iterable.isIterable(val)) return true;
  if (Set.isSet(val)) return true;
  if (OrderedMap.isOrderedMap(val)) return true;
  if (OrderedSet.isOrderedSet(val)) return true;

  return false;
}

export default isImmutable;
