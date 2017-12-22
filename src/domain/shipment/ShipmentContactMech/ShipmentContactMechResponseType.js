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

const ShipmentContactMechResponseType = new GraphQLObjectType({
  name: 'ShipmentContactMechResponseType',
  description: 'response type for ShipmentContactMech',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    shipmentContactMechTypeId: {type: GraphQLString},
    shipmentId: {type: GraphQLString}
  })
});

export {ShipmentContactMechResponseType};
    