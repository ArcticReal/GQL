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

const OrderDetailsDTOResponseType = new GraphQLObjectType({
  name: 'OrderDetailsDTOResponseType',
  description: 'response type for OrderDetailsDTO',

  fields: () => ({
    address1: {type: GraphQLString},
    city: {type: GraphQLString},
    countryGeoId: {type: GraphQLString},
    eMailAddress: {type: GraphQLString},
    grandTotal: {type: GraphQLFloat},
    houseNumberExt: {type: GraphQLString},
    orderDate: {type: GraphQLString},
    orderId: {type: GraphQLString},
    postalCode: {type: GraphQLString},
    products: {type: new GraphQLList(GraphQLString)},
    stateProvinceGeoId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    toName: {type: GraphQLString}
  })
});

export {OrderDetailsDTOResponseType};
    