function isSubtree(s, t) {
  if (!t) {
    return true;
  }
  if (!s) {
    return false;
  }

  if (sameTree(s, t)) {
    return true;
  }

  return isSubtree(s.left, t) || isSubtree(s.right, t);
}

function sameTree(s, t) {
  if (!s && !t) {
    return true;
  }
  if (s && t && s.val == t.val) {
    return sameTree(s.left, t.left) && sameTree(s.right, t.right);
  }

  return false;
}
