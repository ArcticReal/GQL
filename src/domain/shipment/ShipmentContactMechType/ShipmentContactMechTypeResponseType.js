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

const ShipmentContactMechTypeResponseType = new GraphQLObjectType({
  name: 'ShipmentContactMechTypeResponseType',
  description: 'response type for ShipmentContactMechType',

  fields: () => ({
    description: {type: GraphQLString},
    shipmentContactMechTypeId: {type: GraphQLString}
  })
});

export {ShipmentContactMechTypeResponseType};
    