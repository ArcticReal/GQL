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

const ShipmentTypeInputType = new GraphQLInputObjectType({
  name: 'ShipmentTypeInputType',
  description: 'input type for ShipmentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    shipmentTypeId: {type: GraphQLString}
  })
});

export {ShipmentTypeInputType};
    