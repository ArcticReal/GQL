import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const ShoppingListInputType = new GraphQLInputObjectType({
  name: 'ShoppingListInputType',
  description: 'input type for ShoppingList',

  fields: () => ({
    carrierPartyId: {type: GraphQLString},
    carrierRoleTypeId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    currencyUom: {type: GraphQLString},
    description: {type: GraphQLString},
    isActive: {type: GraphQLBoolean},
    isPublic: {type: GraphQLBoolean},
    lastAdminModified: {type: GraphQLString},
    lastOrderedDate: {type: GraphQLString},
    listName: {type: GraphQLString},
    parentShoppingListId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    productPromoCodeId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    recurrenceInfoId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString},
    shoppingListId: {type: GraphQLString},
    shoppingListTypeId: {type: GraphQLString},
    visitorId: {type: GraphQLString}
  })
});

export {ShoppingListInputType};
    