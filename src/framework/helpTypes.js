import {
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLInputObjectType
} from 'graphql';

const KeyValueInputType = new GraphQLInputObjectType({
  name: 'KeyValueType',
  description: 'this is an input type to define key-value pairs',
  fields: () => ({
    key: {type: GraphQLString},
    value: {type: GraphQLString}
  })
});

const KeyValueType = new GraphQLObjectType({
  name: 'KeyValueType',
  description: 'this is an output type to define key-value pairs',
  fields: () => ({
    key: {type: GraphQLString},
    value: {type: GraphQLString}
  })
});

const MapType = new GraphQLObjectType({
  name: 'Map',
  description: 'this is an object type corresponding to a java map',
  fields: () => ({
    keyValues: {
      type: new GraphQLList(KeyValueType),
      resolve: (parent) => {
        var returnVal = [];
        const keys = Object.keys(parent);
        return keys.map((key) => {
          return {
            key: key,
            value: parent[key]
          };
        });
      }
    }
  })
});

const ResponseType = new GraphQLObjectType({
  name: 'ResponseType',
  description: 'this is a response type returned by mutations',
  fields: () => ({
    body: {type: GraphQLString},
    contentType: {type: GraphQLString},
    status: {type: GraphQLInt}
  })
});

export {KeyValueType, KeyValueInputType, MapType, ResponseType};
