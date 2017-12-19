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

const ShipmentContactMechTypeInputType = new GraphQLInputObjectType({
  name: 'ShipmentContactMechTypeInputType',
  description: 'input type for ShipmentContactMechType',

  fields: () => ({
    description: {type: GraphQLString},
    shipmentContactMechTypeId: {type: GraphQLString}
  })
});

export {ShipmentContactMechTypeInputType};
    