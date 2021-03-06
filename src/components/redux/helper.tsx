export const getDiffs = (a: any, b: any) => {
  let y=[];
  let z=[];
  let flag=0;
  for(let i: any = 0; i < a.length; i++) {
    if(b.indexOf(a[i]) === -1) {
      z.push(a[i]);
    }
  }
  for(let j: any = 0; j < b.length; j++) {
    if(a.indexOf(b[j]) === -1) {
      y.push(b[j]);
    }
  }
  return y.concat(z);
}

export const transformDataToSearchable = (item: any) => {
  return {
    category_id: item.category_id,
    categories: item.categories.map((o: any) => o.label),
    objectID: item.id,
    id: item.id,
    name: item.name,
    creation_date: item.creation_date,
    class: item.class,
    permalink: item.seo.permalink,
    title: item.seo.title,
    extra_description: item.seo.description,
    keywords: item.seo.keywords,
    quantity_of_cart: 0,
    quantity: item.availability.quantity,
    quantity_warning: item.availability.quantity_warning,
    allow_override: item.availability.allow_override,
    active: item.availability.active,
    description: item.attributes.description.value,
    price: item.attributes.price.value,
    min_order: parseInt(item.attributes.min_order.value),
    tags: item.attributes.tags.value
  }
}

export const removeFieldOfProducts = (list: any, fieldName: any) => {
  let temp = Object.assign([], list);
  return temp.map((t: any) => {
    let tt = Object.assign({}, t);
    return delete tt[fieldName];
  });
}
